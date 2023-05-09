import React from "react";
import "./Array.css"
import {useState, useEffect} from 'react';

export const Matrix=()=>{


     useEffect(() => {
        const active = window.localStorage.getItem("color-keymat");
        console.log("color-keymat")
        setActive(JSON.parse(active));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat", JSON.stringify(active));
    });

        useEffect(() => {
        const active1 = window.localStorage.getItem("color-keymat1");
        console.log("color-keymat1")
        setActive1(JSON.parse(active1));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat1", JSON.stringify(active1));
    });

        useEffect(() => {
        const active2 = window.localStorage.getItem("color-keymat2");
        console.log("color-keymat2")
        setActive2(JSON.parse(active2));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat2", JSON.stringify(active2));
    });

        useEffect(() => {
        const active3 = window.localStorage.getItem("color-keymat3");
        console.log("color-keymat3")
        setActive3(JSON.parse(active3));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat3", JSON.stringify(active3));
    });

        useEffect(() => {
        const active4 = window.localStorage.getItem("color-keymat4");
        console.log("color-keymat4")
        setActive4(JSON.parse(active4));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat4", JSON.stringify(active4));
    });

        useEffect(() => {
        const active5 = window.localStorage.getItem("color-keymat5");
        console.log("color-keymat5")
        setActive5(JSON.parse(active5));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat5", JSON.stringify(active5));
    });

        useEffect(() => {
        const active6 = window.localStorage.getItem("color-keymat6");
        console.log("color-keymat6")
        setActive6(JSON.parse(active6));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat6", JSON.stringify(active6));
    });

        useEffect(() => {
        const active7 = window.localStorage.getItem("color-keymat7");
        console.log("color-keymat7")
        setActive7(JSON.parse(active7));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat7", JSON.stringify(active7));
    });

        useEffect(() => {
        const active8 = window.localStorage.getItem("color-keymat8");
        console.log("color-keymat8")
        setActive8(JSON.parse(active8));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat8", JSON.stringify(active8));
    });

        useEffect(() => {
        const active9 = window.localStorage.getItem("color-keymat9");
        console.log("color-keymat9")
        setActive9(JSON.parse(active9));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat9", JSON.stringify(active9));
    });

        useEffect(() => {
        const active10 = window.localStorage.getItem("color-keymat10");
        console.log("color-keymat10")
        setActive10(JSON.parse(active10));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat10", JSON.stringify(active10));
    });

        useEffect(() => {
        const active11 = window.localStorage.getItem("color-keymat11");
        console.log("color-keymat11")
        setActive11(JSON.parse(active11));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat11", JSON.stringify(active11));
    });

        useEffect(() => {
        const active12 = window.localStorage.getItem("color-keymat12");
        console.log("color-keymat12")
        setActive12(JSON.parse(active12));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat12", JSON.stringify(active12));
    });

        useEffect(() => {
        const active13 = window.localStorage.getItem("color-keymat13");
        console.log("color-keymat13")
        setActive13(JSON.parse(active13));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat13", JSON.stringify(active13));
    });

        useEffect(() => {
        const active14 = window.localStorage.getItem("color-keymat14");
        console.log("color-keymat14")
        setActive14(JSON.parse(active14));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keymat14", JSON.stringify(active14));
    });
    
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
        alert("Question has been marked as done")
    };

    const [active1, setActive1] = useState(false);
    const handleClick1 = () => {
        setActive1(!active1);
                alert("Question has been marked as done")

    };

    const [active2, setActive2] = useState(false);
    const handleClick2 = () => {
        setActive2(!active2);
                alert("Question has been marked as done")

    };

    const [active3, setActive3] = useState(false);
    const handleClick3 = () => {
        setActive3(!active3);
                alert("Question has been marked as done")

    };

    const [active4, setActive4] = useState(false);
    const handleClick4 = () => {
        setActive4(!active4);
                alert("Question has been marked as done")

    };

    const [active5, setActive5] = useState(false);
    const handleClick5 = () => {
        setActive5(!active5);
                alert("Question has been marked as done")

    };

    const [active6, setActive6] = useState(false);
    const handleClick6 = () => {
        setActive6(!active6);
                alert("Question has been marked as done")

    };

    const [active7, setActive7] = useState(false);
    const handleClick7 = () => {
        setActive7(!active7);
                alert("Question has been marked as done")

    };

    const [active8, setActive8] = useState(false);
    const handleClick8 = () => {
        setActive8(!active8);
                alert("Question has been marked as done")

    };

    const [active9, setActive9] = useState(false);
    const handleClick9 = () => {
        setActive9(!active9);
                alert("Question has been marked as done")

    };

    const [active10, setActive10] = useState(false);
    const handleClick10 = () => {
        setActive10(!active10);
                alert("Question has been marked as done")

    };

    const [active11, setActive11] = useState(false);
    const handleClick11 = () => {
        setActive11(!active11);
                alert("Question has been marked as done")

    };

    const [active12, setActive12] = useState(false);
    const handleClick12 = () => {
        setActive12(!active12);
                alert("Question has been marked as done")

    };

    const [active13, setActive13] = useState(false);
    const handleClick13 = () => {
        setActive13(!active13);
                alert("Question has been marked as done")

    };

    const [active14, setActive14] = useState(false);
    const handleClick14 = () => {
        setActive14(!active14);
                alert("Question has been marked as done")

    };

    return(
       
        <div className="array-page">
        <div className="tablee">
            <div className="container">
                <table className='bold'>
                    <thead>
                        <tr>
                            <th></th>
                            <th className="id">ID</th>
                            <th>Questions</th>
                            <th>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="clr">
                        <td><button className='btn'
                             style={{
                             backgroundColor: active ? 'salmon' : ''
                           }}
                            onClick={handleClick} ></button></td>
    
    <td>01</td>
<td className="Q">Program to find transpose of a matrix</td>
<td id='img1' ><a href="https://www.geeksforgeeks.org/program-to-find-transpose-of-a-matrix/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td>
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active1 ? 'salmon' : ''
                           }}
                            onClick={handleClick1} ></button></td>
                        <td>02</td>
<td className="Q">Adjoint and Inverse of a Matrix</td>
<td id='img1'><a href="https://www.geeksforgeeks.org/adjoint-inverse-matrix/" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="2nd Q link"/></a>
  </td> 
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active2 ? 'salmon' : ''
                           }}
                            onClick={handleClick2} ></button></td>
                        <td>03</td>
<td className="Q">Program to multiply two matrices</td>
<td id='img1'><a href="https://www.geeksforgeeks.org/c-program-multiply-two-matrices/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                        </tr>
                        <tr>
                        <td><button className='btn'
                             style={{
                             backgroundColor: active3 ? 'salmon' : ''
                           }}
                            onClick={handleClick3} ></button></td>
                        <td>04</td>
<td className="Q">Rotate a matrix by 90 degree without using any extra space</td>
<td id='img1'><a href="https://www.geeksforgeeks.org/rotate-matrix-90-degree-without-using-extra-space-set-2/" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="4nd Q link"/></a></td> 
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active4 ? 'salmon' : ''
                           }}
                            onClick={handleClick4} ></button></td>
                       <td>05</td>
<td className="Q">Count zeros in a row wise and column wise sorted matrix</td>
<td id='img1'><a href="https://www.geeksforgeeks.org/count-zeros-in-a-row-wise-and-column-wise-sorted-matrix/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td>
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active5 ? 'salmon' : ''
                           }}
                            onClick={handleClick5} ></button></td>
                        <td>06</td>
<td className="Q">Find a specific pair in Matrix</td>
<td id='img1'><a href="https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="2nd Q link"/></a></td> 
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active6 ? 'salmon' : ''
                           }}
                            onClick={handleClick6} ></button></td>
                       <td>07</td>
<td className="Q">Search element in a sorted matrix</td>
<td id='img1'><a href="https://www.geeksforgeeks.org/search-element-sorted-matrix/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active7 ? 'salmon' : ''
                           }}
                            onClick={handleClick7} ></button></td>
                       <td>08</td>
<td className="Q">Find distinct elements common to all rows of a matrix</td>
<td id='img1'><a href="https://www.geeksforgeeks.org/find-distinct-elements-common-rows-matrix/" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="2nd Q link"/></a></td> 
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active8 ? 'salmon' : ''
                           }}
                            onClick={handleClick8} ></button></td>
                       <td>09</td>
<td className="Q">Spiral traversal on a Matrix</td>
<td id='img1'><a href="https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active9 ? 'salmon' : ''
                           }}
                            onClick={handleClick9} ></button></td>
                        <td>10</td>
<td className="Q">Find median in a row wise sorted matrix</td>
<td id='img1'><a href="https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="2nd Q link"/></a></td> 
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active10 ? 'salmon' : ''
                           }}
                            onClick={handleClick10} ></button></td>
                       <td>11</td>
<td className="Q">Find row with maximum no. of 1's</td>
<td id='img1'><a href="https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active11 ? 'salmon' : ''
                           }}
                            onClick={handleClick11} ></button></td>
                        <td>12</td>
<td className="Q">Print elements in sorted order using row-column wise sorted matrix</td>
<td id='img1'><a href="https://practice.geeksforgeeks.org/problems/sorted-matrix/0" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="2nd Q link"/></a></td> 
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active12 ? 'salmon' : ''
                           }}
                            onClick={handleClick12} ></button></td>
                       <td>13</td>
<td className="Q">Find the maximum size rectangle</td>
<td id='img1'><a href="https://practice.geeksforgeeks.org/problems/max-rectangle/1" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active13 ? 'salmon' : ''
                           }}
                            onClick={handleClick13} ></button></td>
                       <td>14</td>
<td className="Q">Find a specific pair in matrix</td>
<td id='img1'><a href="https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="2nd Q link"/></a></td> 
                        </tr>
                        <tr>
                <td><button className='btn'
                             style={{
                             backgroundColor: active14 ? 'salmon' : ''
                           }}
                            onClick={handleClick14} ></button></td>
                       <td>15</td>
<td className="Q">Common elements in all rows of a given matrix</td>
<td id='img1'><a href="https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                        </tr>
    
    
    
                        </tbody>
                </table>
    
            </div> 
        </div>    
        </div>
        
)}

export default Matrix