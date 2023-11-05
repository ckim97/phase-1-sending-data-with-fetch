const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
fetch("http://localhost:3000/dogs", configurationObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name: name, email: email})
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const newId = data.id;
            const body = document.getElementsByTagName("body");

            const newElement = document.createElement("p");
            newElement.textContent = newId;
            document.body.appendChild(newElement);
        })
        .catch(function(errorMessage) {
            const finalMessage = errorMessage.message;

            const newElement = document.createElement("p");
            newElement.textContent = finalMessage;
            document.body.appendChild(newElement);
        })
    }