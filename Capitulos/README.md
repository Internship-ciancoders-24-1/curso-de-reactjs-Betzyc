# CAPITULO I INTRODUCCION

Hecho

# CAPITULO II FUNDAMENTOS

JSF y Create element diferencias.

# CAPITULO III CREACIÓN DE COMPONENTES

## Componentes

Funcionan como bloques

### Ciclo de vida
Montaje
Actualización -> render() -> nuevo DOOM  -> componentDidUpdate()//reaccionar a cambios
Desmontaje ->componentWillUnmout() -- Eliminar codigo de DOOM

//JSX
/*const jsx =(
    <div>
        <h1>Hola, soy Betzy</h1>
        <p>Soy ingeniera de sistemas</p>
    </div>
);*/

//Create element
/*const element = React.createElement(
    div,
    {},
    React.createElement('h1', {}, 'Hola, soy Betzy'),
    React.createElement('p', {}, 'Soy ingeniera de sistemas')
);*/

/*const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges!';

const container = document.getElementById('app');
container.appendChild(element);*/


