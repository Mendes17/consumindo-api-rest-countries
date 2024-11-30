import { useState } from "react";
import { options } from "../../server/options.js";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  StyledSelect,
  StyledUl,
  StyledLi,
  StyledButtonDivFormat,
  StyledInput,
  StyledButton,
  StyledFormatDiv,
  StyledDivH3,
} from './Search.style.jsx'


const Search = () => {
  const [inputValue, setInputValue] = useState(""); // Vai armazenar oque o usuário vai digitar no input.
  const [selectValue, setSelectValue] = useState(""); // Armazena oque o usuario seleciona para pesquisa "país, língua, moeda..."
  const [data, setData] = useState([]); // Armazena os dados da API
  const [showSearch, setSearch] = useState(true);

  const waitingInput = (name, type) => {
    if (type == "") {
      window.alert("Selecione primeiro oque deseja pesquisar!");
    } else if (name == "") {
      window.alert("Campo de pesquisa vazio!");
    } else {
      fetch(`https://restcountries.com/v3.1/${type}/${name}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data && data.length > 0) {
            // Verifica se o Array esta vazio
            setData(data);
            console.log(data);
          } else {
            window.alert(`Não encontrado!`);
          }
        })
        .catch((e) => {
          window.alert(e);
        });
      setSearch(false);
    }
  };

  const backHome = () => {
    setSearch(true);
    setData(false);
  };

  return (
    <>
      {showSearch && (
        <StyledButtonDivFormat>
          <label>
            <StyledSelect
              onChange={(selected) => setSelectValue(selected.target.value)}>
              {/* Captura oque o usuário quer pesquisar */}
              {options.map((op) => {
                return (
                  <option key={op.id} value={op.type}>
                    {op.text}
                  </option>
                );
              })}
            </StyledSelect>
          </label>
          <StyledInput
            type="text"
            placeholder="Write something..."
            onChange={(userInput) => setInputValue(userInput.target.value)}
          />
          <StyledButton
            onClick={() => {
              waitingInput(inputValue, selectValue);
            }}>
            Search
          </StyledButton>
        </StyledButtonDivFormat>
      )}
      {data &&
        data.length && ( // Verifica se o Array existe e se tem algo nele.
          <StyledFormatDiv>
            <StyledDivH3>
              <h3 style={{ fontSize: "2.4rem" }}>Result: {inputValue} </h3>
              <IoCloseCircleOutline
                style={{ fontSize: "40px" }}
                onClick={backHome}
              />
            </StyledDivH3>
            <StyledUl>
              {data.map((item) => {
                return (
                  <StyledLi key={item?.name?.official}>
                    {item?.name?.official}
                    <img
                      src={item?.flags?.svg}
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                      }}
                    />
                  </StyledLi>
                );
              })}
            </StyledUl>
          </StyledFormatDiv>
        )}
    </>
  );
};

export default Search;
