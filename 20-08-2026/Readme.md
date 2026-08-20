Ahora dentro de `<head>`, después de `<title>`, agregar:

```html
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
    crossorigin="anonymous">
```

Tenemos:

```html
<button>
    Ver productos
</button>
```

Cambiarlo por:

```html
<button class="btn btn-primary">
    Ver productos
</button>
```

```html
<button class="btn btn-primary">
    Primary
</button>

<button class="btn btn-success">
    Success
</button>

<button class="btn btn-danger">
    Danger
</button>

<button class="btn btn-warning">
    Warning
</button>
```

Ahora convertir:

```html
<h1>Tech Store</h1>
```

en:

```html
<h1 class="text-primary">
    Tech Store
</h1>
```

Después:

```html
<h1 class="text-primary text-center">
    Tech Store
</h1>
```

Y el párrafo:

```html
<p class="text-center">
    Tecnología para estudiar, trabajar y entretenerse.
</p>
```

```html
<div class="container">
    <div class="row">
        <div class="col">
            Producto 1
        </div>
        <div class="col">
            Producto 2
        </div>
        <div class="col">
            Producto 3
        </div>
    </div>
</div>
```


```html
<div class="container">
    <h2 class="text-center my-4">
        Nuestros productos
    </h2>
    <div class="row">
        <div class="col">
            💻 Notebook
        </div>
        <div class="col">
            📱 Smartphone
        </div>
        <div class="col">
            🎧 Audífonos
        </div>
        <div class="col">
            ⌨️ Teclado
        </div>
    </div>
</div>
```


```html
<div class="card">
    <div class="card-body">
        <h5 class="card-title">
            Notebook
        </h5>
        <p class="card-text">
            Notebook para estudiar y trabajar.
        </p>
        <a href="#" class="btn btn-primary">
            Comprar
        </a>
    </div>
</div>
```


Antes del `<main>` podemos agregar:

```html
<header class="bg-primary text-white text-center py-5">
    <div class="container">
        <h1 class="display-4">
            Tech Store
        </h1>
        <p class="lead">
            Tecnología para estudiar, trabajar y entretenerse.
        </p>
        <a href="#productos"
           class="btn btn-light btn-lg">
            Ver productos
        </a>
    </div>
</header>
```


```html
<div class="container">
    <h2 class="text-center my-4">
        Nuestros productos
    </h2>
    <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100">
                <div class="card-body text-center">
                    <div class="display-3">
                        💻
                    </div>
                    <h5 class="card-title">
                        Notebook
                    </h5>
                    <p class="card-text">
                        Notebook para estudiar y trabajar.
                    </p>
                    <p class="text-success fw-bold">
                        $499.990
                    </p>
                    <a href="#" class="btn btn-primary">
                        Comprar
                    </a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100">
                <div class="card-body text-center">
                    <div class="display-3">
                        📱
                    </div>
                    <h5 class="card-title">
                        Smartphone
                    </h5>
                    <p class="card-text">
                        Smartphone con excelente rendimiento.
                    </p>
                    <p class="text-success fw-bold">
                        $299.990
                    </p>
                    <a href="#" class="btn btn-primary">
                        Comprar
                    </a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100">
                <div class="card-body text-center">
                    <div class="display-3">
                        🎧
                    </div>
                    <h5 class="card-title">
                        Audífonos
                    </h5>
                    <p class="card-text">
                        Audífonos Bluetooth inalámbricos.
                    </p>
                    <p class="text-success fw-bold">
                        $89.990
                    </p>
                    <a href="#" class="btn btn-primary">
                        Comprar
                    </a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100">
                <div class="card-body text-center">
                    <div class="display-3">
                        ⌨️
                    </div>
                    <h5 class="card-title">
                        Teclado
                    </h5>
                    <p class="card-text">
                        Teclado mecánico para computador.
                    </p>
                    <p class="text-success fw-bold">
                        $59.990
                    </p>
                    <a href="#" class="btn btn-primary">
                        Comprar
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
```


```html
<h2 id="productos"
    class="text-center mb-4">
```


Agregar al comienzo de `<body>`:

```html
<nav class="navbar navbar-expand-lg bg-dark"
     data-bs-theme="dark">
    <div class="container">
        <a class="navbar-brand"
           href="#">
            Tech Store
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Mostrar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"
             id="menuPrincipal">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active"
                       href="#">
                        Inicio
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"
                       href="#productos">
                        Productos
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"
                       href="#">
                        Contacto
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```


Para que el botón responsive de Navbar funcione debemos incorporar 
el JavaScript de Bootstrap.

Justo antes de:

```html
</body>
```

agregar:

```html
<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
    crossorigin="anonymous">
</script>
```