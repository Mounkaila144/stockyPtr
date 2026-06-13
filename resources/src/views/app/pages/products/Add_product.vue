<template>
  <div class="main-content">
    <breadcumb :page="$t('AddProduct')" :folder="$t('Products')"/>
    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <validation-observer ref="Create_Product" v-if="!isLoading">
      <b-form @submit.prevent="Submit_Product" enctype="multipart/form-data">
        <b-row>
          <b-col md="8" class="mb-2">
            <b-card class="mt-3">
              <b-row>



                <!-- Name -->
                <b-col md="6" class="mb-2">
                  <validation-provider
                    name="Name"
                    :rules="{required:true , min:3 , max:55}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('Name_product') + ' ' + '*'">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="Name"
                        :placeholder="$t('Enter_Name_Product')"
                        v-model="product.name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                 <!-- -Product Image -->
                <b-col md="6" class="mb-2">
                <validation-provider name="Image" ref="Image" rules="mimes:image/*">
                  <b-form-group slot-scope="{validate, valid, errors }" label="Product Image">
                    <input
                      :state="errors[0] ? false : (valid ? true : null)"
                      :class="{'is-invalid': !!errors.length}"
                      @change="onFileSelected"
                      label="Choose Image"
                      type="file"
                    >
                    <b-form-invalid-feedback id="Image-feedback">{{ errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>

                <!-- Barcode Symbology  -->
                <!-- Barcode Symbology field hidden with CODE128 as default -->
                <b-col md="6" class="mb-2 d-none">
                  <validation-provider name="Barcode Symbology" :rules="{ required: true}">
                    <b-form-group
                      slot-scope="{ valid, errors }"
                      :label="$t('BarcodeSymbology') + ' ' + '*'"
                    >
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="product.Type_barcode"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Symbology')"
                        :options="
                            [
                              {label: 'Code 128', value: 'CODE128'},
                              {label: 'Code 39', value: 'CODE39'},
                              {label: 'EAN8', value: 'EAN8'},
                              {label: 'EAN13', value: 'EAN13'},
                              {label: 'UPC', value: 'UPC'},
                            ]"
                      ></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Code Product"-->
                <!-- Code Product field hidden with auto-generated value -->
                <b-col md="6" class="mb-2 d-none">
                  <validation-provider name="Code Product" :rules="{ required: true}">
                    <b-form-group
                      slot-scope="{ valid, errors }"
                      :label="$t('CodeProduct') + ' ' + '*'"
                    >
                      <b-form-input
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        aria-describedby="CodeProduct-feedback"
                        type="text"
                        v-model="product.code"
                      ></b-form-input>
                      <b-form-invalid-feedback id="CodeProduct-feedback">{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Category -->
                <b-col md="6" class="mb-2">
                  <validation-provider name="category" :rules="{ required: true}">
                    <b-form-group
                      slot-scope="{ valid, errors }"
                      :label="$t('Categorie') + ' ' + '*'"
                    >
                      <div class="d-flex">
                        <v-select
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          :reduce="label => label.value"
                          :placeholder="$t('Choose_Category')"
                          v-model="product.category_id"
                          :options="categories.map(categories => ({label: categories.name, value: categories.id}))"
                          style="flex: 1;"
                        />
                        <b-button
                          @click="New_Category()"
                          variant="primary"
                          size="sm"
                          class="ml-2"
                          style="height: 38px; min-width: 40px;"
                          title="Ajouter une nouvelle catégorie"
                        >
                          <i class="i-Add"></i>
                        </b-button>
                      </div>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Brand  -->
                <b-col md="6" class="mb-2 d-none">
                  <b-form-group :label="$t('Brand')">
                    <v-select
                      :placeholder="$t('Choose_Brand')"
                      :reduce="label => label.value"
                      v-model="product.brand_id"
                      :options="brands.map(brands => ({label: brands.name, value: brands.id}))"
                    />
                  </b-form-group>
                </b-col>

                <!-- Order Tax -->
                <b-col md="6" class="mb-2">
                  <validation-provider
                    name="Order Tax"
                    :rules="{regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('OrderTax')">
                      <div class="input-group">
                        <input
                          :state="getValidationState(validationContext)"
                          aria-describedby="OrderTax-feedback"
                          v-model.number="product.TaxNet"
                          type="text"
                          class="form-control"
                        >
                        <div class="input-group-append">
                          <span class="input-group-text">%</span>
                        </div>
                      </div>
                      <b-form-invalid-feedback
                        id="OrderTax-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Tax Method -->
                <b-col lg="6" md="6" sm="12" class="mb-2">
                  <validation-provider name="Tax Method" :rules="{ required: true}">
                    <b-form-group
                      slot-scope="{ valid, errors }"
                      :label="$t('TaxMethod') + ' ' + '*'"
                    >
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="product.tax_method"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Method')"
                        :options="
                           [
                            {label: 'Exclusive', value: '1'},
                            {label: 'Inclusive', value: '2'}
                           ]"
                      ></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <b-col md="12" class="mb-2">
                  <b-form-group :label="$t('Description')">
                    <textarea
                      rows="4"
                      class="form-control"
                      :placeholder="$t('Afewwords')"
                      v-model="product.note"
                    ></textarea>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-card>

            <b-card class="mt-3" v-if="product.type == 'is_combo'">
              <b-row>

                <div class="col-md-12 mb-5 mt-3">
                    <div id="autocomplete" class="autocomplete">
                        <input  :placeholder="$t('Scan_Search_Product_by_Code_Name')"
                        @input='e => search_input = e.target.value' @keyup="search(search_input)" @focus="handleFocus"
                        @blur="handleBlur" ref="product_autocomplete" class="autocomplete-input" />
                        <ul class="autocomplete-result-list" v-show="focused">
                        <li class="autocomplete-result" v-for="product_fil in product_filter"
                            @mousedown="SearchProduct(product_fil)">{{getResultValue(product_fil)}}</li>
                        </ul>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-hover table-sm">
                        <thead class="bg-gray-300">
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col" class="text-right">Cost</th>
                                <th scope="col" class="text-right">SubTotal</th>
                                <th scope="col" class="text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="materiels.length <=0">
                                <td colspan="4">No data Available</td>
                            </tr>
                            <tr v-for="materiel in materiels">
                                <td>
                                  <span class="badge badge-success">{{materiel.name}}</span>
                                  <br>
                                  <span>{{materiel.code}}</span>
                                </td>

                                <td>
                                    <div class="input-group">
                                        <input class="form-control" v-model.number="materiel.quantity"  style=" width: 30px; ">
                                        <div class="input-group-append">
                                            <span class="input-group-text">{{materiel.unit_name}}</span>
                                        </div>
                                    </div>
                                </td>

                                <td class="text-right">{{currentUser.currency}} {{materiel.cost}}</td>
                                <td class="text-right">{{currentUser.currency}} {{formatNumber(materiel.cost * materiel.quantity, 2)}}</td>

                                <td class="text-right">

                                    <a
                                      style="color: #ffff;"
                                      @click="delete_materiel(materiel.product_id)"
                                      class="btn btn-sm btn-danger"
                                      title="Delete"
                                    >
                                      <i class="i-Close-Window"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="offset-md-9 col-md-3 mt-4">
                  <table class="table table-striped table-sm">
                    <tbody>
                      <tr>
                        <td>Total Cost</td>
                        <td>
                          <span>{{currentUser.currency}} {{ formatNumber(totalCost, 2) }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </b-row>
            </b-card>

            <b-card class="mt-3">
              <b-row>
                <!-- Type  -->
                <b-col md="6" class="mb-2 d-none">
                  <validation-provider name="Type" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('type') + ' ' + '*'">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="product.type"
                         @input="Selected_Type_Product"
                        :reduce="label => label.value"
                        :placeholder="$t('type')"
                        :options="
                            [
                            {label: 'Standard Product', value: 'is_single'},
                            {label: 'Variable Product', value: 'is_variant'},
                            {label: 'Service Product', value: 'is_service'},
                            {label: 'Combo Product', value: 'is_combo'}
                            ]"
                      ></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Product Cost -->
                <b-col md="6" class="mb-2" v-if="product.type == 'is_single'  || product.type == 'is_combo'">
                  <validation-provider
                    name="Product Cost"
                    :rules="{ required: !pricesOptional , regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('ProductCost') + (pricesOptional ? '' : ' *')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="ProductCost-feedback"
                        label="Cost"
                        :placeholder="$t('Enter_Product_Cost')"
                        v-model="product.cost"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="ProductCost-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Product Price (hidden default; mirrors Retail price for backend compat) -->
                <b-col md="6" class="mb-2 d-none" v-if="product.type == 'is_single' || product.type == 'is_service' || product.type == 'is_combo'">
                  <b-form-input v-model="product.price"></b-form-input>
                </b-col>

                <!-- Retail Price (for clients - small quantities) -->
                <b-col
                  md="6"
                  class="mb-2"
                  v-if="product.type == 'is_single' || product.type == 'is_service' || product.type == 'is_combo'"
                >
                  <validation-provider
                    name="Retail Price"
                    :rules="{ required: !pricesOptional , regex: /^\d*\.?\d*$/ }"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('RetailPrice') + (pricesOptional ? '' : ' *')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="RetailPrice-feedback"
                        label="Retail Price"
                        :placeholder="$t('Enter_Retail_Price')"
                        v-model="product.price_retail"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="RetailPrice-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Wholesale Price (for resellers - large quantities) -->
                <b-col
                  md="6"
                  class="mb-2"
                  v-if="product.type == 'is_single' || product.type == 'is_service' || product.type == 'is_combo'"
                >
                  <validation-provider
                    name="Wholesale Price"
                    :rules="{ regex: /^\d*\.?\d*$/ }"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('WholesalePrice')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="WholesalePrice-feedback"
                        label="Wholesale Price"
                        :placeholder="$t('Enter_Wholesale_Price')"
                        v-model="product.price_wholesale"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="WholesalePrice-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Expiry Date -->
                <b-col
                  md="6"
                  class="mb-2"
                  v-if="product.type != 'is_variant'"
                >
                  <b-form-group :label="$t('ExpiryDate')">
                    <b-form-input
                      type="date"
                      v-model="product.expiry_date"
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <!-- Unit Product -->
                <b-col md="6" class="mb-2" v-if="product.type != 'is_service'">
                  <validation-provider name="Unit Product" :rules="{ required: true}">
                    <b-form-group
                      slot-scope="{ valid, errors }"
                      :label="$t('UnitProduct') + ' ' + '*'"
                    >
                      <div class="d-flex">
                        <v-select
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          v-model="product.unit_id"
                          class="required"
                          required
                          @input="Selected_Unit"
                          :placeholder="$t('Choose_Unit_Product')"
                          :reduce="label => label.value"
                          :options="units.map(units => ({label: units.name, value: units.id}))"
                          style="flex: 1;"
                        />
                        <b-button
                          @click="New_Unit()"
                          variant="primary"
                          size="sm"
                          class="ml-2"
                          style="height: 38px; min-width: 40px;"
                          title="Ajouter une nouvelle unité"
                        >
                          <i class="i-Add"></i>
                        </b-button>
                      </div>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Unit Sale -->
                <b-col md="6" class="mb-2" v-if="product.type != 'is_service'">
                  <validation-provider name="Unit Sale" :rules="{ required: true}">
                    <b-form-group
                      slot-scope="{ valid, errors }"
                      :label="$t('UnitSale') + ' ' + '*'"
                    >
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="product.unit_sale_id"
                        :placeholder="$t('Choose_Unit_Sale')"
                        :reduce="label => label.value"
                        :options="units_sub.map(units_sub => ({label: units_sub.name, value: units_sub.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Unit Purchase -->
                <b-col md="6" class="mb-2" v-if="product.type != 'is_service'">
                  <validation-provider name="Unit Purchase" :rules="{ required: true}">
                    <b-form-group
                      slot-scope="{ valid, errors }"
                      :label="$t('UnitPurchase') + ' ' + '*'"
                    >
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="product.unit_purchase_id"
                        :placeholder="$t('Choose_Unit_Purchase')"
                        :reduce="label => label.value"
                        :options="units_sub.map(units_sub => ({label: units_sub.name, value: units_sub.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Stock Alert -->
                <b-col md="6" class="mb-2" v-if="product.type != 'is_service'">
                  <validation-provider
                    name="Stock Alert"
                    :rules="{ regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('StockAlert')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="StockAlert-feedback"
                        label="Stock alert"
                        :placeholder="$t('Enter_Stock_alert')"
                        v-model="product.stock_alert"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="StockAlert-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>



                <div class="col-md-12 mb-3 mt-3" v-if="product.type == 'is_variant'">
                  <div class="d-flex">
                    <input
                      style="height: 40px;"
                      placeholder="Enter the Variant"
                      type="text"
                      name="variant"
                      v-model="tag"
                      class="form-control"
                    >
                    <a
                      style="color: #ffff;margin-left: 10px;"
                      @click="add_variant(tag)"
                      class="ms-3 btn btn-md btn-primary"
                    >{{$t('Add')}}</a>
                  </div>
                </div>

                <div class="col-md-12 mb-2" v-if="product.type == 'is_variant'">
                  <div class="table-responsive">
                    <table class="table table-hover table-sm">
                      <thead class="bg-gray-300">
                        <tr>
                          <th scope="col">{{$t('Variant_code')}}</th>
                          <th scope="col">{{$t('Variant_Name')}}</th>
                          <th scope="col">{{$t('Variant_cost')}}</th>
                          <th scope="col">{{$t('Variant_price')}}</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="variants.length <=0">
                          <td colspan="3">{{$t('NodataAvailable')}}</td>
                        </tr>
                        <tr v-for="variant in variants">
                          <td>
                            <input required class="form-control" v-model="variant.code">
                          </td>
                          <td>
                            <input required  class="form-control" v-model="variant.text">
                          </td>
                          <td>
                            <input :required="!pricesOptional" class="form-control" v-model="variant.cost">
                          </td>
                          <td>
                            <input :required="!pricesOptional" class="form-control" v-model="variant.price">
                          </td>
                          <td>
                            <a
                              style="color: #ffff;"
                              @click="delete_variant(variant.var_id)"
                              class="btn btn-sm btn-danger"
                              title="Delete"
                            >
                              <i class="i-Close-Window"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </b-row>
            </b-card>


            <b-card class="mt-3" :header="$t('Warranty_Guarantee_Tracking')">
              <b-row>

                <!-- Warranty & Guarantee Tracking -->
                <!-- Warranty Period + Unit -->
                <b-col md="6" class="mb-2">

                    <b-form-group :label="$t('Warranty_Period')">
                      <b-input-group>
                        <b-form-input
                          placeholder="0"
                          v-model="product.warranty_period"
                        ></b-form-input>
                        <b-form-select
                          v-model="product.warranty_unit"
                          :options="[
                            { value: 'days', text: $t('Days') },
                            { value: 'months', text: $t('Months') },
                            { value: 'years', text: $t('Years') }
                          ]"
                        ></b-form-select>
                      </b-input-group>

                    </b-form-group>
                </b-col>

                <!-- Warranty Terms -->
                <b-col md="12" class="mb-2">
                    <b-form-group :label="$t('WarrantyTerms')">
                      <b-form-textarea
                        placeholder="Enter warranty terms..."
                        rows="3"
                        v-model="product.warranty_terms"
                      ></b-form-textarea>
                    </b-form-group>
                </b-col>

                <!-- Guarantee Toggle -->
                <b-col md="6" class="mb-2">
                  <b-form-group>
                    <b-form-checkbox
                      v-model="product.has_guarantee"
                      name="has_guarantee"
                      :unchecked-value="false"
                      :checked-value="true"
                    >
                      {{ $t('HasGuarantee') }}
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>

                <!-- Guarantee Period + Unit -->
                <b-col md="6" class="mb-2" v-if="product.has_guarantee">

                    <b-form-group :label="$t('Guarantee_Period')">
                      <b-input-group>
                        <b-form-input
                          placeholder="0"
                          v-model="product.guarantee_period"
                        ></b-form-input>
                        <b-form-select
                          v-model="product.guarantee_unit"
                          :options="[
                            { value: 'days', text: $t('Days') },
                            { value: 'months', text: $t('Months') },
                            { value: 'years', text: $t('Years') }
                          ]"
                        ></b-form-select>
                      </b-input-group>
                    </b-form-group>
                </b-col>

              </b-row>
            </b-card>

            <b-card class="mt-3" :header="$t('OpeningStock')" v-if="product.type == 'is_single'">
              <b-row>
                <!-- one column per warehouse -->
                <b-col
                  md="6"
                  class="mb-2"
                  v-for="wh in warehouses"
                  :key="wh.id"
                >
                  <h6 class="mb-1">{{ wh.name }}</h6>

                    <b-form-group>
                      <b-form-input
                        type="number"
                        min="0"
                        placeholder="0"
                        v-model.number="product.warehouses[wh.id].qte"
                      />
                    </b-form-group>
                </b-col>
              </b-row>
            </b-card>


            <b-card class="mt-3" v-if="product.type != 'is_combo'">
              <b-row>
                <!-- Product_Has_Imei_Serial_number -->
                <b-col md="12 mb-2">
                  <ValidationProvider rules vid="product" v-slot="x">
                    <div class="form-check">
                      <label class="checkbox checkbox-outline-primary">
                        <input type="checkbox" v-model="product.is_imei">
                        <h5>{{$t('Product_Has_Imei_Serial_number')}}</h5>
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </ValidationProvider>
                </b-col>

                <!-- This_Product_Not_For_Selling -->
                <b-col md="12 mb-2">
                  <ValidationProvider rules vid="product" v-slot="x">
                    <div class="form-check">
                      <label class="checkbox checkbox-outline-primary">
                        <input type="checkbox" v-model="product.not_selling">
                        <h5>{{$t('This_Product_Not_For_Selling')}}</h5>
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </ValidationProvider>
                </b-col>
              </b-row>
            </b-card>
          </b-col>

          <b-col md="12" class="mt-3">
            <b-button variant="primary" type="submit" :disabled="SubmitProcessing"><i class="i-Yes me-2 font-weight-bold"></i> {{$t('submit')}}</b-button>
            <div v-once class="typo__p" v-if="SubmitProcessing">
              <div class="spinner sm spinner-primary mt-3"></div>
            </div>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>

    <!-- Modal for Creating New Category -->
    <validation-observer ref="Create_Category">
      <b-modal hide-footer size="md" id="New_Category" :title="$t('Add') + ' ' + $t('Categorie')">
        <b-form @submit.prevent="Submit_Category">
          <b-row>
            <!-- Code category -->
            <b-col md="12">
              <validation-provider
                name="Code category"
                :rules="{ required: true}"
                v-slot="validationContext"
              >
                <b-form-group :label="$t('Codecategorie') + ' ' + '*'">
                  <b-form-input
                    :placeholder="$t('Enter_Code_category')"
                    :state="getValidationState(validationContext)"
                    aria-describedby="Code-feedback"
                    label="Code"
                    v-model="newCategory.code"
                  ></b-form-input>
                  <b-form-invalid-feedback id="Code-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Name category -->
            <b-col md="12">
              <validation-provider
                name="Name category"
                :rules="{ required: true}"
                v-slot="validationContext"
              >
                <b-form-group :label="$t('Namecategorie') + ' ' + '*'">
                  <b-form-input
                    :placeholder="$t('Enter_name_category')"
                    :state="getValidationState(validationContext)"
                    aria-describedby="Name-feedback"
                    label="Name"
                    v-model="newCategory.name"
                  ></b-form-input>
                  <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

             <b-col md="12" class="mt-3">
                <b-button variant="primary" type="submit"  :disabled="CategorySubmitProcessing"><i class="i-Yes me-2 font-weight-bold"></i> {{$t('submit')}}</b-button>
                  <div v-once class="typo__p" v-if="CategorySubmitProcessing">
                    <div class="spinner sm spinner-primary mt-3"></div>
                  </div>
            </b-col>

          </b-row>
        </b-form>
      </b-modal>
    </validation-observer>

    <!-- Modal for Creating New Unit -->
    <validation-observer ref="Create_Unit">
      <b-modal hide-footer size="md" id="New_Unit" :title="$t('Add') + ' ' + $t('Units')">
        <b-form @submit.prevent="Submit_Unit">
          <b-row>
            <!-- Name -->
            <b-col md="12">
              <validation-provider
                name="Name"
                :rules="{ required: true , max:15}"
                v-slot="validationContext"
              >
                <b-form-group :label="$t('Name') + ' ' + '*'">
                  <b-form-input
                    :placeholder="$t('Enter_Name_Unit')"
                    :state="getValidationState(validationContext)"
                    aria-describedby="Name-feedback"
                    label="Name"
                    v-model="newUnit.name"
                  ></b-form-input>
                  <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- ShortName -->
            <b-col md="12">
              <validation-provider
                name="ShortName"
                :rules="{ required: true , max:15}"
                v-slot="validationContext"
              >
                <b-form-group :label="$t('ShortName') + ' ' + '*'">
                  <b-form-input
                    :placeholder="$t('Enter_ShortName_Unit')"
                    :state="getValidationState(validationContext)"
                    aria-describedby="ShortName-feedback"
                    label="ShortName"
                    v-model="newUnit.ShortName"
                  ></b-form-input>
                  <b-form-invalid-feedback id="ShortName-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Base unit -->
            <b-col md="12">
              <b-form-group :label="$t('BaseUnit')">
                <v-select
                  @input="Selected_Base_Unit"
                  v-model="newUnit.base_unit"
                  :reduce="label => label.value"
                  :placeholder="$t('Choose_Base_Unit')"
                  :options="units_base.map(units_base => ({label: units_base.name, value: units_base.id}))"
                />
              </b-form-group>
            </b-col>

            <!-- operator -->
            <b-col md="12" v-show="show_operator">
              <b-form-group :label="$t('Operator')">
                <v-select
                  v-model="newUnit.operator"
                  :reduce="label => label.value"
                  :placeholder="$t('Choose_Operator')"
                  :options="[
                    {label: 'Multiply (*)', value: '*'},
                    {label: 'Divide (/)', value: '/'}
                  ]"
                ></v-select>
              </b-form-group>
            </b-col>

            <!-- Operation Value -->
            <b-col md="12" v-show="show_operator">
              <validation-provider
                name="Operation Value"
                :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                v-slot="validationContext"
              >
                <b-form-group :label="$t('OperationValue') + ' ' + '*'">
                  <b-form-input
                    :placeholder="$t('Enter_Operation_Value')"
                    :state="getValidationState(validationContext)"
                    aria-describedby="Operation-feedback"
                    label="Operation"
                    v-model="newUnit.operator_value"
                  ></b-form-input>
                  <b-form-invalid-feedback id="Operation-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

             <b-col md="12" class="mt-3">
                <b-button variant="primary" type="submit"  :disabled="UnitSubmitProcessing"><i class="i-Yes me-2 font-weight-bold"></i> {{$t('submit')}}</b-button>
                  <div v-once class="typo__p" v-if="UnitSubmitProcessing">
                    <div class="spinner sm spinner-primary mt-3"></div>
                  </div>
            </b-col>

          </b-row>
        </b-form>
      </b-modal>
    </validation-observer>
  </div>
</template>


<script>
import VueTagsInput from "@johmun/vue-tags-input";
import NProgress from "nprogress";
import { mapActions, mapGetters } from "vuex";

export default {
  metaInfo: {
    title: "Create Product"
  },
  data() {
    return {
      focused: false,
      timer:null,
      search_input:'',
      product_filter:[],
      warehouses: [],
      tag: "",
      len: 8,
      change: false,
      isLoading: true,
      SubmitProcessing: false,
      data: new FormData(),
      categories: [],
      units: [],
      units_sub: [],
      brands: [],
      roles: {},
      variants: [],
      materiels: [],
      products_ing: [],
      product: {
        warehouses: {},
        type: "is_single",
        name: "",
        code: "",
        Type_barcode: "CODE128",
        cost: "",
        price: "",
        price_wholesale: "",
        price_retail: "",
        expiry_date: "",
        brand_id: "",
        category_id: "",
        TaxNet: "0",
        tax_method: "1",
        unit_id: "",
        unit_sale_id: "",
        unit_purchase_id: "",
        stock_alert: "0",
        image: "",
        note: "",
        is_variant: false,
        is_imei: false,
        not_selling: false,
        warranty_period: null,
        warranty_unit: 'months',
        warranty_terms: '',
        has_guarantee: false,
        guarantee_period: null,
        guarantee_unit: 'months',
      },
      code_exist: "",
      CategorySubmitProcessing: false,
      newCategory: {
        name: "",
        code: ""
      },
      UnitSubmitProcessing: false,
      show_operator: false,
      units_base: [],
      newUnit: {
        name: "",
        ShortName: "",
        base_unit: "",
        operator: "*",
        operator_value: 1
      }
    };
  },

  components: {
    VueTagsInput
  },

  computed: {
    ...mapGetters(["currentUserPermissions","currentUser","tenantFeatures"]),
    pricesOptional() {
      return !!(this.tenantFeatures && this.tenantFeatures.prices_optional);
    },
    totalCost() {
      return this.materiels.reduce((total, materiel) => {
        return total + (materiel.cost * materiel.quantity);
      }, 0);
    }
  },

  watch: {
    // Keep the legacy `price` field in sync with Retail price so the backend keeps working.
    "product.price_retail": function(val) {
      this.product.price = val;
    }
  },

  methods: {

     //------------------------------Formetted Numbers -------------------------\\
     formatNumber(number, dec) {
      const value = (typeof number === "string"
        ? number
        : number.toString()
      ).split(".");
      if (dec <= 0) return value[0];
      let formated = value[1] || "";
      if (formated.length > dec)
        return `${value[0]}.${formated.substr(0, dec)}`;
      while (formated.length < dec) formated += "0";
      return `${value[0]}.${formated}`;
    },


      //---------------------- Event Selected_product_type------------------------------\\
      Selected_Type_Product(value) {

        this.products_ing = [];
        if(value == 'is_combo'){
            this.get_products_materiels();
        }
      },


  //---------------------- get_products_materiels------------------------------\\
  get_products_materiels(value) {
  axios
    .get("get_products_materiels")
    .then(({ data }) => (this.products_ing = data));
  },

   // Search Products
   search(){
    if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
    }
    if (this.search_input.length < 1) {
        return this.product_filter= [];
    }
        this.timer = setTimeout(() => {
        const product_filter = this.products_ing.filter(ingredient => ingredient.code === this.search_input);
            if(product_filter.length === 1){
                this.SearchProduct(product_filter[0])
            }else{
                this.product_filter=  this.products_ing.filter(ingredient => {
                return (
                    ingredient.name.toLowerCase().includes(this.search_input.toLowerCase()) ||
                    ingredient.code.toLowerCase().includes(this.search_input.toLowerCase())
                    );
                });
            }
        }, 800);

    },

    // get Result Value Search Products
    getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },

    handleFocus() {
    this.focused = true
  },


  handleBlur() {
    this.focused = false
  },

    //------------------------------ Event Upload Image -------------------------------\\
    async onFileSelected(e) {
      const { valid } = await this.$refs.Image.validate(e);

      if (valid) {
        this.product.image = e.target.files[0];
      } else {
        this.product.image = "";
      }
    },



  // Submit Search Products
  SearchProduct(result) {
      if (
          this.materiels.length > 0 &&
          this.materiels.some(detail => detail.code === result.code)
      ) {
          toastr.error('Product_Already_added');

      } else {

          var materiel_tag = {
              product_id:result.product_id,
              name:result.name,
              code:result.code,
              unit_name:result.unit_name,
              cost:result.cost,
              quantity:1,
          }
          this.materiels.push(materiel_tag);

      }
      this.search_input= '';
      this.$refs.product_autocomplete.value = "";
      this.product_filter = [];
    },


      //-----------------------------------Delete variant------------------------------\\
      delete_materiel(product_id) {

        for (var i = 0; i < this.materiels.length; i++) {
            if (product_id === this.materiels[i].product_id) {
            this.materiels.splice(i, 1);
            }
        }
      },





     //------ Generate code
     generateNumber() {
      this.code_exist = "";
      this.product.code = Math.floor(
        Math.pow(10, 7) +
          Math.random() *
            (Math.pow(10, 8) - Math.pow(10, 7) - 1)
      );
    },


    //------------- Submit Validation Create Product
    Submit_Product() {
      this.$refs.Create_Product.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {

            if (this.product.type == 'is_variant' && this.variants.length <= 0) {
              this.makeToast("danger", "The variants array is required.", this.$t("Failed"));
            }else{
              this.Create_Product();
            }

        }
      });
    },



    add_variant(tag) {
      if (
        this.variants.length > 0 &&
        this.variants.some(variant => variant.text === tag)
      ) {
        this.makeToast(
          "warning",
          this.$t("VariantDuplicate"),
          this.$t("Warning")
        );
      } else {
          if(this.tag != ''){
            var variant_tag = {
              var_id: this.variants.length + 1, // generate unique ID
              text: tag
            };
            this.variants.push(variant_tag);
            this.tag = "";
          }else{

            this.makeToast(
              "warning",
              "Please Enter the Variant",
              this.$t("Warning")
            );

          }
      }
    },
    //-----------------------------------Delete variant------------------------------\\
    delete_variant(var_id) {

      for (var i = 0; i < this.variants.length; i++) {
        if (var_id === this.variants[i].var_id) {
          this.variants.splice(i, 1);
        }
      }
    },

    //------ Toast
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },

    //------ Validation State
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },


    //-------------- Product Get Elements
    GetElements() {
      axios
        .get("products/create")
        .then(response => {
          this.categories = response.data.categories;
          this.brands = response.data.brands;
          this.units = response.data.units;
          this.warehouses = response.data.warehouses;

            // 2) initialize product.warehouses so each key exists reactively
            response.data.warehouses.forEach(wh => {
              // each wh has { id, name, qte, manage_stock }
              this.$set(this.product.warehouses, wh.id, {
                qte:          wh.qte,
              })
            })

          // Set default values for select fields
          this.setDefaultValues();

          this.isLoading = false;
        })
        .catch(response => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //------------- Set Default Values for Select Fields
    setDefaultValues() {
      // Set default category (first available)
      if (this.categories.length > 0 && !this.product.category_id) {
        this.product.category_id = this.categories[0].id;
      }

      // Set default brand (first available)
      if (this.brands.length > 0 && !this.product.brand_id) {
        this.product.brand_id = this.brands[0].id;
      }

      // Set default unit (first available)
      if (this.units.length > 0 && !this.product.unit_id) {
        this.product.unit_id = this.units[0].id;
        // Load sub units for the selected unit, then set sale/purchase units
        this.Selected_Unit(this.units[0].id);
      }
    },

    //------------- Set Default Sale and Purchase Units (called after sub units are loaded)
    setDefaultSubUnits() {
      // Set default sale unit (first available sub unit)
      if (this.units_sub.length > 0 && !this.product.unit_sale_id) {
        this.product.unit_sale_id = this.units_sub[0].id;
      }

      // Set default purchase unit (first available sub unit)
      if (this.units_sub.length > 0 && !this.product.unit_purchase_id) {
        this.product.unit_purchase_id = this.units_sub[0].id;
      }
    },

    //---------------------- Get Sub Units with Unit id ------------------------------\\
    Get_Units_SubBase(value) {
      axios
        .get("get_sub_units_by_base?id=" + value)
        .then(({ data }) => {
          this.units_sub = data;
          // Set default sub units after loading
          this.setDefaultSubUnits();
        });
    },

    //---------------------- Event Select Unit Product ------------------------------\\
    Selected_Unit(value) {
      this.units_sub = [];
      this.product.unit_sale_id = "";
      this.product.unit_purchase_id = "";
      this.Get_Units_SubBase(value);
    },

    //------------------------------ Create new Product ------------------------------\\
    Create_Product() {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      var self = this;
      self.SubmitProcessing = true;

      if (self.product.type == 'is_variant' && self.variants.length > 0) {
          self.product.is_variant = true;
      }else{
        self.product.is_variant = false;
      }

       // append array variants
       if (self.materiels.length && self.product.type == 'is_combo') {
        self.data.append("materiels", JSON.stringify(self.materiels));
      }


      // append objet product
      Object.entries(self.product).forEach(([key, value]) => {
          self.data.append(key, value);
      });


      // append array variants
      if (self.variants.length) {
        self.data.append("variants", JSON.stringify(self.variants));
      }

      if (Object.keys(self.product.warehouses).length && self.product.type == 'is_single') {
        self.data.append(
          "warehouses",
          JSON.stringify(self.product.warehouses)
        );
      }

      // Send Data with axios
      axios
        .post("products", self.data)
        .then(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          self.SubmitProcessing = false;
          this.$router.push({ name: "index_products" });
          this.makeToast(
            "success",
            this.$t("Successfully_Created"),
            this.$t("Success")
          );
        })
        .catch(error => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          self.SubmitProcessing = false;
          if (error.errors.code && error.errors.code.length > 0) {
            self.code_exist = error.errors.code[0];
            this.makeToast("danger", error.errors.code[0], this.$t("Failed"));
          }else if(error.errors.variants && error.errors.variants.length > 0){
            this.makeToast("danger", error.errors.variants[0], this.$t("Failed"));
          }else{
            this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
          }

        });
    },

    //------------------------------ Modal (create category) -------------------------------\\
    New_Category() {
      this.reset_Category_Form();
      this.$bvModal.show("New_Category");
    },

    //--------------------------- reset Category Form ----------------\\
    reset_Category_Form() {
      this.newCategory = {
        name: "",
        code: ""
      };
    },

    //------------- Submit Validation Create Category
    Submit_Category() {
      this.$refs.Create_Category.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          this.Create_Category();
        }
      });
    },

    //----------------------------------Create new Category ----------------\\
    Create_Category() {
      this.CategorySubmitProcessing = true;
      axios
        .post("categories", {
          name: this.newCategory.name,
          code: this.newCategory.code
        })
        .then(response => {
          this.CategorySubmitProcessing = false;
          // Ajouter la nouvelle catégorie à la liste locale
          const newCat = {
            id: response.data.id,
            name: this.newCategory.name,
            code: this.newCategory.code
          };
          this.categories.push(newCat);

          // Sélectionner automatiquement la nouvelle catégorie
          this.product.category_id = newCat.id;

          // Fermer la modal
          this.$bvModal.hide("New_Category");

          this.makeToast(
            "success",
            this.$t("Successfully_Created"),
            this.$t("Success")
          );
        })
        .catch(error => {
          this.CategorySubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //------------------------------ Modal (create unit) -------------------------------\\
    New_Unit() {
      this.reset_Unit_Form();
      this.show_operator = false;
      this.Get_Units_Base();
      this.$bvModal.show("New_Unit");
    },

    //--------------------------- reset Unit Form ----------------\\
    reset_Unit_Form() {
      this.newUnit = {
        name: "",
        ShortName: "",
        base_unit: "",
        operator: "*",
        operator_value: 1
      };
    },

    //------------- Submit Validation Create Unit
    Submit_Unit() {
      this.$refs.Create_Unit.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          this.Create_Unit();
        }
      });
    },

    Selected_Base_Unit(value) {
      if (value == null) {
        this.show_operator = false;
      } else {
        this.show_operator = true;
      }
    },

    //----------------------------------Create new Unit ----------------\\
    Create_Unit() {
      this.UnitSubmitProcessing = true;

      let base_unit = this.newUnit.base_unit;
      let operator = this.newUnit.operator;
      let operator_value = this.newUnit.operator_value;

      if (base_unit === '' || base_unit === null) {
        operator = '*';
        operator_value = 1;
      }

      axios
        .post("units", {
          name: this.newUnit.name,
          ShortName: this.newUnit.ShortName,
          base_unit: base_unit,
          operator: operator,
          operator_value: operator_value
        })
        .then(response => {
          this.UnitSubmitProcessing = false;
          // Ajouter la nouvelle unité à la liste locale
          const newUnitData = {
            id: response.data.id,
            name: this.newUnit.name,
            ShortName: this.newUnit.ShortName
          };
          // Ajouter aux listes sans changer la sélection en cours
          this.units.push(newUnitData);
          this.units_sub.push(newUnitData);

          // Fermer la modal
          this.$bvModal.hide("New_Unit");

          this.makeToast(
            "success",
            this.$t("Successfully_Created"),
            this.$t("Success")
          );
        })
        .catch(error => {
          this.UnitSubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------- Get Units Base ------------------------------\\
    Get_Units_Base() {
      axios
        .get("units")
        .then(response => {
          this.units_base = response.data.Units_base;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, //end Methods

  //-----------------------------Created function-------------------

  created: function() {
    this.GetElements();
    this.generateNumber(); // Auto-generate product code on component creation

  }
};
</script>

<style>
</style>
