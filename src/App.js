import React from "react";
import "./App.css";
import axios from "axios";

const App = () => {

  axios.defaults.headers.common['authorization'] = 123456;

  const instance = axios.create({
    baseURL: "https://reqres.in/api",
    timeout: 1000,
    headers: {"X-Custom-Header":"foobar"}
  })

  const instanceData = () => {
    //concatenar desde el codigo base
    instance.get("/users")
    .then((res) => console.log(res.data));
  };

  axios.defaults.baseURL = "https://reqres.in/api"

  const getData = () => {
    //obtenemos las datas de la API
    axios
    .get("/users")
    .then(({ data: data2 })=> console.log(data2));
  };

  const config = {
    data: {
      name: "john doe",
      job: "junior developer"
    },
    headers: {
      "constent-type":"application/json",
    },
  };

  const postData = () => {
    //para postear, modificar el objeto
    axios
    .post("/users",config)
    .then((res) => console.log(res.data))
    .catch(res => console.loga(res));
  };

  const updateData = async () => {
    //para actualizar con el clasico promesa try&catch
    try{
      const res = await axios.put('/2',{
        name: "Jose Torres",
        job: "Senior Developer"
      })
      console.log(res.data);
    }catch (err){
      console.log(err);
    }
  };

  const deleteData = () => {
    axios.delete('/2')
    .then(res => console.log(res.status));
  };

  const multiple = () => {
    Promise.all([axios.get("https://reqres.in/api/users?page=2"),axios.post("https://reqres.in/api/users",config)])
    .then(res => console.log(res[0], res[1]))
  };

  return (
    <>
      <div className='grid'>
        <button style={style} onClick={getData}>
          Get
        </button>
        <button style={style} onClick={postData}>
          Post
        </button>
        <button style={style} onClick={updateData}>
          Update
        </button>
        <button style={style} onClick={deleteData}>
          Delete
        </button>
        <button style={style} onClick={instanceData}>
          Instance
        </button>
        <button style={style} onClick={multiple}>
          Multiple
        </button>
      </div>
    </>
  );
};

export default App;

const style = {
  backgroundColor: "black",
  color: "white",
  padding: "4px 8px",
  border: "none",
  borderRadius: "4px",
  display: "block",
  marginBottom: "4px",
  fontWeight: "bold",
};

