const heading = React.createElement("h1", { id: 'title',style: {color: 'pink', textAlign: 'center'} }, "Hello Everyone Using React");
const heading2 = React.createElement("h1", { id: 'title' }, "Heading 2");
const image = React.createElement("img",{src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'})
const hr = React.createElement('hr',{})
const container = React.createElement('div',{id: 'container'},[heading,heading2,hr,image])
console.log(image)
console.log(container)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
