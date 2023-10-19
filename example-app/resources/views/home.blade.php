<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main>
        @auth
            <h1>Login com sucesso!</h1>
            <form action="/logout" method="POST">
                @csrf
                <button>Log out</button>
            </form>

            <div>
                <h2>criete a new post</h2>
                <form action="/createPost" method="post">
                    @csrf
                    <input type="text" name="title" placeholder="Title">
                    <textarea name="body" placeholder="Body content..."></textarea><br/>

                    <button>Criete content</button>
                </form>
            </div>
        @else
        <div>
            <h1>Essa é minha Home</h1>
            <form action="/register" method="post">
                @csrf
                <input type="text" name="name" placeholder="Name">
                <input type="email" name="email" placeholder="E-mail">
                <input type="password" name="password" placeholder="Password">
                <input type="submit" value="eviar">
            </form>

            <h1>Login</h1>
            <form action="/login" method="post">
                @csrf
                <input type="text" name="login_name" placeholder="Name">
                <input type="password" name="login_password" placeholder="Password">

                <button>Log in</button>
            </form>
        </div>
        @endauth  
        
    </main>
</body>
</html>