import React from 'react'
import "./Array.css"
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';

export const Linkedlist = () => {
     
    useEffect(() => {
        const active = window.localStorage.getItem("color-keylis");
        console.log("color-keylis")
        setActive(JSON.parse(active));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis", JSON.stringify(active));
    });

        useEffect(() => {
        const active1 = window.localStorage.getItem("color-keylis1");
        console.log("color-keylis1")
        setActive1(JSON.parse(active1));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis1", JSON.stringify(active1));
    });

        useEffect(() => {
        const active2 = window.localStorage.getItem("color-keylis2");
        console.log("color-keylis2")
        setActive2(JSON.parse(active2));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis2", JSON.stringify(active2));
    });

        useEffect(() => {
        const active3 = window.localStorage.getItem("color-keylis3");
        console.log("color-keylis3")
        setActive3(JSON.parse(active3));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis3", JSON.stringify(active3));
    });

        useEffect(() => {
        const active4 = window.localStorage.getItem("color-keylis4");
        console.log("color-keylis4")
        setActive4(JSON.parse(active4));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis4", JSON.stringify(active4));
    });

        useEffect(() => {
        const active5 = window.localStorage.getItem("color-keylis5");
        console.log("color-keylis5")
        setActive5(JSON.parse(active5));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis5", JSON.stringify(active5));
    });

        useEffect(() => {
        const active6 = window.localStorage.getItem("color-keylis6");
        console.log("color-keylis6")
        setActive6(JSON.parse(active6));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis6", JSON.stringify(active6));
    });

        useEffect(() => {
        const active7 = window.localStorage.getItem("color-keylis7");
        console.log("color-keylis7")
        setActive7(JSON.parse(active7));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis7", JSON.stringify(active7));
    });

        useEffect(() => {
        const active8 = window.localStorage.getItem("color-keylis8");
        console.log("color-keylis8")
        setActive8(JSON.parse(active8));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis8", JSON.stringify(active8));
    });

        useEffect(() => {
        const active9 = window.localStorage.getItem("color-keylis9");
        console.log("color-keylis9")
        setActive9(JSON.parse(active9));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis9", JSON.stringify(active9));
    });

        useEffect(() => {
        const active10 = window.localStorage.getItem("color-keylis10");
        console.log("color-keylis10")
        setActive10(JSON.parse(active10));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis10", JSON.stringify(active10));
    });

        useEffect(() => {
        const active11 = window.localStorage.getItem("color-keylis11");
        console.log("color-keylis11")
        setActive11(JSON.parse(active11));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis11", JSON.stringify(active11));
    });

        useEffect(() => {
        const active12 = window.localStorage.getItem("color-keylis12");
        console.log("color-keylis12")
        setActive12(JSON.parse(active12));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis12", JSON.stringify(active12));
    });

        useEffect(() => {
        const active13 = window.localStorage.getItem("color-keylis13");
        console.log("color-keylis13")
        setActive13(JSON.parse(active13));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis13", JSON.stringify(active13));
    });

        useEffect(() => {
        const active14 = window.localStorage.getItem("color-keylis14");
        console.log("color-keylis14")
        setActive14(JSON.parse(active14));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis14", JSON.stringify(active14));
    });

        useEffect(() => {
        const active15 = window.localStorage.getItem("color-keylis15");
        console.log("color-keylis15")
        setActive15(JSON.parse(active15));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis15", JSON.stringify(active15));
    });

        useEffect(() => {
        const active16 = window.localStorage.getItem("color-keylis16");
        console.log("color-keylis16")
        setActive16(JSON.parse(active16));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis16", JSON.stringify(active16));
    });

        useEffect(() => {
        const active17 = window.localStorage.getItem("color-keylis17");
        console.log("color-keylis17")
        setActive17(JSON.parse(active17));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis17", JSON.stringify(active17));
    });

        useEffect(() => {
        const active18 = window.localStorage.getItem("color-keylis18");
        console.log("color-keylis18")
        setActive18(JSON.parse(active18));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis18", JSON.stringify(active18));
    });

        useEffect(() => {
        const active19 = window.localStorage.getItem("color-keylis19");
        console.log("color-keylis19")
        setActive19(JSON.parse(active19));
    },[])
    useEffect(() => {
        window.localStorage.setItem("color-keylis19", JSON.stringify(active19));
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

    const [active15, setActive15] = useState(false);
    const handleClick15 = () => {
        setActive15(!active15);
                alert("Question has been marked as done")

    };

    const [active16, setActive16] = useState(false);
    const handleClick16 = () => {
        setActive16(!active16);
                alert("Question has been marked as done")

    };

    const [active17, setActive17] = useState(false);
    const handleClick17 = () => {
        setActive17(!active17);
                alert("Question has been marked as done")

    };

    const [active18, setActive18] = useState(false);
    const handleClick18 = () => {
        setActive18(!active18);
                alert("Question has been marked as done")

    };

    const [active19, setActive19] = useState(false);
    const handleClick19 = () => {
        setActive19(!active19);
                alert("Question has been marked as done")

    };





    // useEffect(() => {
    //     window.localStorage.setItem('save', JSON.stringify(isActive));
    // });

    // useEffect(() => {
    //     const savedData = window.localStorage.getItem("save");
    //     console.log(savedData);
    //     setIsActive(JSON.parse(savedData))
        
    // }, []);

  return (
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
                        <td className="Q">Write a Program to reverse the Linked List. (Both Iterative and recursive)</td>
                        <td id='img'><a href="https://www.geeksforgeeks.org/reverse-a-linked-list/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td>
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active1 ? 'salmon' : ''
                       }}
                        onClick={handleClick1} ></button></td>
                    <td>02</td>
                        <td className="Q"> Reverse a Linked List in group of Given Size. [Very Imp]</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="2nd Q link"/></a>
                          </td> 
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active2 ? 'salmon' : ''
                       }}
                        onClick={handleClick2} ></button></td>
                    <td>03</td>
                        <td className="Q">Write a program to Delete loop in a linked list.</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                    </tr>
                    <tr>
                    <td><button className='btn'
                         style={{
                         backgroundColor: active3 ? 'salmon' : ''
                       }}
                        onClick={handleClick3} ></button></td>
                    <td>04</td>
                        <td className="Q">Find the starting point of the loop. </td>
                        <td id='img'><a href="https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="4nd Q link"/></a></td> 
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active4 ? 'salmon' : ''
                       }}
                        onClick={handleClick4} ></button></td>
                    <td>05</td>
                        <td className="Q">Remove Duplicates in a sorted Linked List.</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active5 ? 'salmon' : ''
                       }}
                        onClick={handleClick5} ></button></td>
                    <td>06</td>
                        <td className="Q">Remove Duplicates in a Un-sorted Linked List.</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="2nd Q link"/></a></td> 
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active6 ? 'salmon' : ''
                       }}
                        onClick={handleClick6} ></button></td>
                    <td>07</td>
                        <td className="Q">Reverse a String using Stack</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active7 ? 'salmon' : ''
                       }}
                        onClick={handleClick7} ></button></td>
                    <td>08</td>
                        <td className="Q">Write a Program to Move the last element to Front in a Linked List.</td>
                        <td id='img'><a href="https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" id='link' alt="2nd Q link"/></a></td> 
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active8 ? 'salmon' : ''
                       }}
                        onClick={handleClick8} ></button></td>
                    <td>09</td>
                        <td className="Q">Add “1” to a number represented as a Linked List.</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td>
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active9 ? 'salmon' : ''
                       }}
                        onClick={handleClick9} ></button></td>
                    <td>10</td>
                        <td className="Q">Add two numbers represented by linked lists.</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" id='link' alt="2nd Q link"/></a></td> 
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active10 ? 'salmon' : ''
                       }}
                        onClick={handleClick10} ></button></td>
                    <td>11</td>
                        <td className="Q">Intersection of two Sorted Linked List.</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td>
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active11 ? 'salmon' : ''
                       }}
                        onClick={handleClick11} ></button></td>
                    <td>12</td>
                        <td className="Q">Intersection Point of two Linked Lists.t</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" id='link' alt="2nd Q link"/></a></td> 
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active12 ? 'salmon' : ''
                       }}
                        onClick={handleClick12} ></button></td>
                    <td>13</td>
                        <td className="Q">Merge Sort For Linked lists.[Very Important]</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td>
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active13 ? 'salmon' : ''
                       }}
                        onClick={handleClick13} ></button></td>
                    <td>14</td>
                        <td className="Q">Quicksort for Linked Lists.[Very Important]</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" id='link' alt="2nd Q link"/></a></td> 
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active14 ? 'salmon' : ''
                       }}
                        onClick={handleClick14} ></button></td>
                    <td>15</td>
                        <td className="Q">Find the middle Element of a linked list.</td>
                        <td id='img'><a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td>
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active15 ? 'salmon' : ''
                       }}
                        onClick={handleClick15} ></button></td>
                    <td>16</td>
                        <td className="Q">Check if a linked list is a circular linked list.</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/circular-linked-list/1" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" id='link' alt="2nd Q link"/></a></td> 
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active16 ? 'salmon' : ''
                       }}
                        onClick={handleClick16} ></button></td>
                    <td>17</td>
                        <td className="Q">Split a Circular linked list into two halves.</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td>
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active17 ? 'salmon' : ''
                       }}
                        onClick={handleClick17} ></button></td>
                    <td>18</td>
                        <td className="Q">Write a Program to check whether the Singly Linked list is a palindrome or not.</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" id='link' alt="2nd Q link"/></a></td> 
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active18 ? 'salmon' : ''
                       }}
                        onClick={handleClick18} ></button></td>
                    <td>19</td>
                        <td className="Q">Deletion from a Circular Linked List.</td>
                        <td id='img'><a href="https://www.geeksforgeeks.org/deletion-circular-linked-list/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td>
                    </tr>
                    <tr>
            <td><button className='btn'
                         style={{
                         backgroundColor: active19 ? 'salmon' : ''
                       }}
                        onClick={handleClick19} ></button></td>
                    <td>20</td>
                        <td className="Q">Reverse a Doubly Linked list.</td>
                        <td id='img'><a href="https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" id='link' alt="2nd Q link"/></a></td> 
                    </tr>

                    </tbody>
            </table>

        </div> 
    </div>    
    </div> 
  )
}

export default Linkedlist