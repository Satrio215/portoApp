<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>mhsatrioa</title> <!-- Static title -->
    <link rel="shortcut icon" href="{{ asset('asset/myLogo.png') }}" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    @routes <!-- Ensure Ziggy routes are added here -->
    @inertiaHead
</head>
<body class="font-sans antialiased">
    @inertia
</body>
</html>
