fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        const names = data.map(item => item.name);
        console.log(names)
    })
