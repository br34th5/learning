One way that components can interact:
a component can render another component.

Now you will learn another way that components can interact: 
a component can pass information to another component.
/* This is known as "props."

Access a Component's props */

// A component's props is an object. 
It holds information about that component.

Most of the information in this.props is pretty useless! 
// But some of it is extremely important, as you'll see.
...
render() {
	const stringProps = JSON.stringify(this.props);
	return <h2>{stringProps}</h2>
}
...

Pass `props` to a Component
By giving that component an attribute:

<Greeting name="Frarthur" age={2} haunted={false} />

/* If you want to pass information that isn't a string, 
then wrap that information in curly braces. */
<Greeting myInfo={["top", "secret", "lol"]} />


Render a Component's props
1 - Find the component class that is going to receive that information.
2 - Include this.props.name-of-information in that component 
class's render method's return statement.

return <h1>Hi there, {this.props.firstname}!</h1>;


The most common use of props is to pass information to a component,
from a different component.
@ look at Greeting folder


Render Different UI Based on props
// You can also use props to make decisions.
@ look at Props making decisions folder

