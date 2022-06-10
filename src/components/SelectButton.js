import React from 'react'



export default function SelectButton({ children, selected, onClick }) {

    const styles = ({
        selectbutton: {
          border: "1px solid #3486eb",
          borderRadius: 5,
          padding: 10,
          paddingLeft: 20,
          paddingRight: 20,
          fontFamily: "Montserrat",
          cursor: "pointer",
          backgroundColor: selected ? "#3486eb" : "",
          color: selected ? "black" : "",
          fontWeight: selected ? 700 : 500,
          "&:hover": {
            backgroundColor: "#3486eb",
            color: "black",
          },
          width: "22%",
          margin: 5,
        },
      });

  return (
    <span onClick={onClick} style={styles.selectbutton}>
      {children}
    </span>
  )
}
