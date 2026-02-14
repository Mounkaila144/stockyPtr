<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super Admin | StockyPTR</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
            --primary: #2563eb; --indigo: #4f46e5; --gray-200: #e5e7eb;
            --gray-300: #d1d5db; --gray-500: #6b7280; --gray-700: #374151;
            --gray-800: #1f2937; --gray-900: #111827; --white: #fff; --red-500: #ef4444;
        }
        body {
            font-family: 'Inter', sans-serif; background: var(--gray-900);
            min-height: 100vh; display: flex; align-items: center; justify-content: center;
        }
        .card {
            background: var(--white); border-radius: 20px; padding: 40px;
            width: 100%; max-width: 400px; box-shadow: 0 25px 50px rgba(0,0,0,0.25);
        }
        .card h1 { font-size: 1.4rem; font-weight: 800; color: var(--gray-900); margin-bottom: 8px; text-align: center; }
        .card .subtitle { text-align: center; color: var(--gray-500); font-size: 0.9rem; margin-bottom: 32px; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; font-size: 0.875rem; font-weight: 600; color: var(--gray-700); margin-bottom: 6px; }
        .form-group input {
            width: 100%; padding: 12px 14px; border: 1px solid var(--gray-300);
            border-radius: 8px; font-size: 0.95rem; font-family: inherit;
        }
        .form-group input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
        .btn {
            display: block; width: 100%; padding: 12px; border-radius: 10px;
            font-weight: 600; font-size: 1rem; border: none; cursor: pointer;
            background: linear-gradient(135deg, var(--gray-800), var(--gray-900));
            color: var(--white); font-family: inherit;
        }
        .btn:hover { opacity: 0.9; }
        .error { color: var(--red-500); font-size: 0.85rem; margin-bottom: 16px; text-align: center; }
    </style>
</head>
<body>
    <div class="card">
        <h1>Super Admin</h1>
        <p class="subtitle">Panneau d'administration StockyPTR</p>

        @if($errors->any())
            <div class="error">{{ $errors->first() }}</div>
        @endif

        <form method="POST" action="{{ route('superadmin.login.submit') }}">
            @csrf
            <div class="form-group">
                <label for="password">Mot de passe administrateur</label>
                <input type="password" id="password" name="password" required autofocus>
            </div>
            <button type="submit" class="btn">Se connecter</button>
        </form>
    </div>
</body>
</html>
