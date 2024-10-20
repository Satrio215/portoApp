<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    @routes <!-- Pastikan Ziggy routes ditambahkan di sini -->
    @inertiaHead
</head>
<body class="font-sans antialiased">
    <div id="root"></div> <!-- Pastikan elemen ini ada -->
    @inertia
</body>
</html>
