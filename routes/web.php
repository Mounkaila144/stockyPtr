<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\TenantRegistrationController;
use App\Http\Controllers\SuperAdminController;
use Modules\Store\Http\Controllers\StoreController;
use Laravel\passport\Passport;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

//------------------------------------------------------------------\\
// Passport::routes();

Route::post('/login', [
    'uses' => 'Auth\LoginController@login',
    'middleware' => 'Is_Active',
]);

Route::get('password/find/{token}', 'PasswordResetController@find');


//------------------------------------------------------------------\\

$installed = Storage::disk('public')->exists('installed');

if ($installed === false) {
    Route::get('/setup', [
        'uses' => 'SetupController@viewCheck',
    ])->name('setup');

    Route::get('/setup/step-1', [
        'uses' => 'SetupController@viewStep1',
    ]);

    Route::post('/setup/step-2', [
        'as' => 'setupStep1', 'uses' => 'SetupController@setupStep1',
    ]);

    Route::post('/setup/testDB', [
        'as' => 'testDB', 'uses' => 'TestDbController@testDB',
    ]);

    Route::get('/setup/step-2', [
        'uses' => 'SetupController@viewStep2',
    ]);

    Route::get('/setup/step-3', [
        'uses' => 'SetupController@viewStep3',
    ]);

    Route::get('/setup/finish', function () {

        return view('setup.finishedSetup');
    });

    Route::get('/setup/getNewAppKey', [
        'as' => 'getNewAppKey', 'uses' => 'SetupController@getNewAppKey',
    ]);

    Route::get('/setup/getPassport', [
        'as' => 'getPassport', 'uses' => 'SetupController@getPassport',
    ]);

    Route::get('/setup/getMegrate', [
        'as' => 'getMegrate', 'uses' => 'SetupController@getMegrate',
    ]);

    Route::post('/setup/step-3', [
        'as' => 'setupStep2', 'uses' => 'SetupController@setupStep2',
    ]);

    Route::post('/setup/step-4', [
        'as' => 'setupStep3', 'uses' => 'SetupController@setupStep3',
    ]);

    Route::post('/setup/step-5', [
        'as' => 'setupStep4', 'uses' => 'SetupController@setupStep4',
    ]);

    Route::post('/setup/lastStep', [
        'as' => 'lastStep', 'uses' => 'SetupController@lastStep',
    ]);

    Route::get('setup/lastStep', function () {
        return redirect('/setup', 301);
    });

} else {
    Route::any('/setup/{vue}', function () {
        abort(403);
    });
}

//------------------------------------------------------------------\\

// Landing page - public route (no auth required)
Route::get('/', [LandingController::class, 'index'])->name('landing');

// Pages legales
Route::get('/conditions-utilisation', function () {
    return view('conditions');
})->name('conditions');

Route::get('/protection-donnees', function () {
    return view('protection-donnees');
})->name('protection-donnees');

// Inscription tenant
Route::get('/register/{plan?}', [TenantRegistrationController::class, 'showForm'])->name('register.tenant');
Route::post('/register', [TenantRegistrationController::class, 'register'])->name('register.tenant.submit');

// Super Admin Panel
Route::prefix('admin')->middleware('superadmin')->group(function () {
    Route::get('/', [SuperAdminController::class, 'index'])->name('superadmin.dashboard');
    Route::get('/tenant/{id}', [SuperAdminController::class, 'show'])->name('superadmin.tenant.show');
    Route::post('/tenant/{id}/activate', [SuperAdminController::class, 'activate'])->name('superadmin.tenant.activate');
    Route::post('/tenant/{id}/deactivate', [SuperAdminController::class, 'deactivate'])->name('superadmin.tenant.deactivate');
    Route::post('/tenant/{id}/change-plan', [SuperAdminController::class, 'changePlan'])->name('superadmin.tenant.changePlan');
    Route::post('/tenant/{id}/features', [SuperAdminController::class, 'updateTenantFeatures'])->name('superadmin.tenant.features.update');
    Route::delete('/tenant/{id}', [SuperAdminController::class, 'destroy'])->name('superadmin.tenant.destroy');

    // Plans management
    Route::get('/plans', [SuperAdminController::class, 'plans'])->name('superadmin.plans');
    Route::get('/plans/{id}/features', [SuperAdminController::class, 'editFeatures'])->name('superadmin.plans.features');
    Route::post('/plans/{id}/features', [SuperAdminController::class, 'updateFeatures'])->name('superadmin.plans.features.update');
});
Route::get('/admin/login', [SuperAdminController::class, 'loginForm'])->name('superadmin.login');
Route::post('/admin/login', [SuperAdminController::class, 'login'])->name('superadmin.login.submit');
Route::post('/admin/logout', [SuperAdminController::class, 'logout'])->name('superadmin.logout');

Route::group(['middleware' => ['web', 'auth:web', 'Is_Active']], function () {

    Route::get('/login', function () {
        $installed = Storage::disk('public')->exists('installed');
        if ($installed === false) {
            return redirect('/setup');
        } else {
            return redirect('/login');
        }
    });


    Route::get('/{vue}',
      function () {
        $installed = Storage::disk('public')->exists('installed');
        $ModulesData = BaseController::get_Module_Info();

        if ($installed === false) {
            return redirect('/setup');
        } else {
            return view('layouts.master' , [
                'ModulesInstalled' => $ModulesData['ModulesInstalled'],
                'ModulesEnabled' => $ModulesData['ModulesEnabled'],
                'image_base' => \App\utils\TenantStorage::imageBasePath(),
                'flag_base' => \App\utils\TenantStorage::flagBasePath(),
            ]);
        }
    })->where('vue', '^(?!api|setup|update|update_database_module|password|module|store|online_store|conditions-utilisation|protection-donnees).*$');
 
});
   
    Auth::routes([
        'register' => false,
    ]);


//------------------------- -UPDATE ----------------------------------------\\

Route::group(['middleware' => ['web', 'auth:web', 'Is_Active']], function () {

    Route::get('update_database_module/{module_name}', 'ModuleSettingsController@update_database_module')->name('update_database_module');


    Route::get('/update', 'UpdateController@viewStep1');

    Route::get('/update/finish', function () {

        return view('update.finishedUpdate');
    });

    Route::post('/update/lastStep', [
        'as' => 'update_lastStep', 'uses' => 'UpdateController@lastStep',
    ]);

});




