import{ css} from "lit-element";

export default css `

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  margin: auto;
  max-width: 500px;
}

label, input, select {
  font-family: sans-serif;
}

input, select {
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
}

input:hover, select:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

select {
  width: 100%;
}

input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

input[type="submit"]:hover {
  background-color: #3e8e41;
}
`