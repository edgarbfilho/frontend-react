import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CadastroList = () => {
  const [cadastros, setCadastros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCadastros = async () => {
      try {
        const response = await axios.get('http://localhost/api/cadastros', {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYjczODczZjBhNGViYmVmMTcxNjllMTg3MTNjYjcyM2QwY2M0YWU1YjlhZTYwMzVlOWVhZTVhMTFjYmZlMmMyM2Q1MTdjZjYwOTlmMzc3N2YiLCJpYXQiOjE3MTYxNDYyMjcuODc4NjkxLCJuYmYiOjE3MTYxNDYyMjcuODc4NjkyLCJleHAiOjE3NDc2ODIyMjcuODY2OTIxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.I4-LDYfSDnj8fOfg74qpWVwO8TsKV0GsSn1KtA4SpYkE2nfDSwNp8Ps6oDOUCTknBIRwtP7K3NGIDehYch9PBT7Z_4gxWpBAYeAAYDcxBCfXbFwK2DAZCZ55kRwKjy4WohX88ezQIDah8OCrhIDEOggv9vcQ39cD9e_mLA7YM9OxVItRofk4x10ZbuOqsFwaKXC0iWr4kCvLuhIaJ5CtOMOBSN8E5Nzg6TLmWffXnbx5Z79HVf7fQDZvQhEbYg0TQZ36pcC5uLBTNqO68a5snPTdnuIQfyLzpVW1tn0yL8MersYH-IJYpFA7ehs9X9Gmds6xi9v9eWj39DNCLQ6WK4fReRK_kH_dnk5oA28XL2uqxR-lVBFpuFwO-1jb32RY1RYdfYrPazvyXC-HcOCTSWPPycT87B5Diy8JC-Hx9yp2XbCle66ZeCQFxBTAYQo8c9to5L49cw_4RCjEoe4MPmYlHGCA0pg-92qoNck9q4oTO8_3xFJB_y0tcGfMK5pyKhYL7pJJahFHWgn1OssuW20DGR-vJNygiUQWsBIHIf0jF6hxJZefO_2sX2BVffUBQuRh3PAV4cja36LaYKD9mbQ70RLanHvCGcqxo1AIdBqTwbzMzPdmNUSNIUdmXmrS61xfd72kKt-1kG3K8wPIKhzt3stv3TZ7tOScERtzQKM`
          }
        });
        setCadastros(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCadastros();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading cadastros: {error.message}</p>;
  }

  return (
    <div>
      <a className="btn btn-primary btn-sm mb-3">Adicionar</a>
      <h3>Listagem dos Cadastros</h3><hr></hr>
        {cadastros.map(cadastro => (
          <div className="mb-3">ID: {cadastro.id}<br></br>Nome: {cadastro.nome}<br></br>E-Mail: {cadastro.email}<br></br>Telefone: {cadastro.telefone}<br></br><br></br><a className="btn btn-primary btn-sm">Editar</a> <a className="btn btn-danger btn-sm">Excluir</a><hr></hr></div>
        ))}
    </div>
  );
};

export default CadastroList;

