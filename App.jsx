import { useState } from "react";
import { searchCompany } from "./api";

function App() {
  const [cnpj, setCnpj] = useState("");
  const [resultado, setResultado] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const consultar = async () => {
    setCarregando(true);
    setErro("");
    setResultado(null);

    try {
      const data = await searchCompany({ tipo: "cnpj", valor: cnpj });
      setResultado(data);
    } catch (err) {
      setErro(err.message || "Erro ao consultar.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1>Consulta de CNPJ</h1>
      <input
        type="text"
        placeholder="Digite o CNPJ (somente números)"
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", width: "300px" }}
      />
      <button
        onClick={consultar}
        style={{ padding: "8px 16px", marginLeft: "10px", fontSize: "16px" }}
        disabled={carregando}
      >
        {carregando ? "Consultando..." : "Consultar"}
      </button>

      {erro && <p style={{ color: "red", marginTop: "20px" }}>{erro}</p>}

      {resultado && (
        <pre style={{ marginTop: "20px", background: "#f4f4f4", padding: "20px" }}>
          {JSON.stringify(resultado, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
