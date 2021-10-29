import React from 'react'
import './Header.css';
import {createMuiTheme, MenuItem, TextField,ThemeProvider} from '@material-ui/core';
import categories from '../../data/category';

const Header = ({category,setCategory,word,setWord}) => {
    const darkTheme = createMuiTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });
    
    const handleChange = (Language)=>{
      setCategory(Language);
      setWord("");
    }
    return (
        <div className="header">
            <span className="title">{word?word:"Dictionary"}</span>
            <div className="inputs">
               <ThemeProvider theme={darkTheme}>

               <TextField className="search" id="standard-basic" label="word" variant="standard" value={word} onChange={(e)=>setWord(e.target.value)}/>

               <TextField className="select"
          id="standard-select-currency"
          select
          label="Language"
          value= {category}
          onChange = {(e)=>handleChange(e.target.value)}
        >
            {
                categories.map((option)=> {
                  return <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>

                })
            }
        </TextField>
</ThemeProvider>
            </div>
        </div>
    )
}

export default Header
