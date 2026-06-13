<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="stylesheet" href="/css/master.css?v={{ filemtime(public_path('css/master.css')) }}">
    <link rel="icon" type="image/jpeg" href="/icone.jpeg">
    <title>{{ $app_settings->app_name ?? 'Ptrniger | Ultimate Inventory With POS' }}</title>

  </head>

  <body class="text-left">
    <noscript>
      <strong>
        We're sorry but Ptrniger doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>

    <!-- built files will be auto injected -->
    <div class="loading_wrap" id="loading_wrap">
      <div class="loader_logo">
      <img src="{{ asset(tenant_image_url('', $app_settings->logo ?? 'logo.png')) }}" class="" alt="logo" />

      </div>

      <div class="loading"></div>
    </div>
    <div id="app">
      <script src="/assets_setup/js/qrcode.js"></script>

    </div>

    <script>
      window.config = {
        "ModulesEnabled" : @json($ModulesEnabled),
        "ModulesInstalled" : @json($ModulesInstalled),
        "image_base" : @json($image_base ?? '/images'),
        "flag_base" : @json($flag_base ?? '/flags'),
      };
    </script>

    <script src="/js/main.min.js?v={{ filemtime(public_path('js/main.min.js')) }}"></script>

  </body>
</html>
