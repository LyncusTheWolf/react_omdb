import React from "react";
import styled from 'styled-components';

//import '../css/Paginator.css' 

const Paginator_Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Paginator_Button = styled.button`
    background-color: cornflowerblue;
    padding: 20;
    border: 0;
    color: "#fff";
    font-size: "36px";
    font-weight: "bold";
`;

const Paginator_Text = styled.p`
    margin: 0;
    padding: 20;
    height: 100%;
    background-color: cornflowerblue;
    font-size: "36px";
    font-weight: "bold";
`;

export const Paginator = ({currentPage, pageTotal, onPageUpdateCallback}) => {
    function showPrevious() {
        //alert("Previous");
        onPageUpdateCallback(--currentPage);
    }

    function showNext() {
        //alert("Next");
        onPageUpdateCallback(++currentPage);
    }

    const buttonStyle = {
        backgroundColor: "007bff",
        padding: 20,
        border: 0,
        color: "#fff",
        fontSize: "36px",
        fontWeight: "bold"
    }

    //style={{display: "flex", flexDirection: "row", justifyContent: "center"}}
    return (
        <Paginator_Container>
            <Paginator_Button onClick={showPrevious} disabled={currentPage === 1}>&lt;</Paginator_Button>
            <Paginator_Text>Page {currentPage} of {pageTotal}</Paginator_Text>
            <Paginator_Button onClick={showNext} disabled={currentPage === pageTotal}>&gt;</Paginator_Button>
        </Paginator_Container>
    )
}

export default Paginator;