import React from "react";
import "./Array.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Todo from "./todo";

const data = {
  Sheet1: [
    {
      "Topic:": "Array",
      "Problem: ": "Reverse the array",
      Done: "<->",
      URL: "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Find the maximum and minimum element in an array",
      Done: "<->",
      URL: "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
    },
    {
      "Topic:": "Array",
      "Problem: ": 'Find the "Kth" max and min element of an array ',
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/kth-smallest-element/0",
    },
    {
      "Topic:": "Array",
      "Problem: ":
        "Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Move all the negative elements to one side of the array ",
      Done: "<->",
      URL: "https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Find the Union and Intersection of the two sorted arrays.",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Write a program to cyclically rotate an array by one.",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "find Largest sum contiguous Subarray [V. IMP]",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Minimise the maximum difference between heights [V.IMP]",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Minimum no. of Jumps to reach end of an array",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "find duplicate in an array of N+1 Integers",
      Done: "<->",
      URL: "https://leetcode.com/problems/find-the-duplicate-number/",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Merge 2 sorted arrays without using Extra space.",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Kadane's Algo [V.V.V.V.V IMP]",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Merge Intervals",
      Done: "<->",
      URL: "https://leetcode.com/problems/merge-intervals/",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Next Permutation",
      Done: "<->",
      URL: "https://leetcode.com/problems/next-permutation/",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Count Inversion",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Best time to buy and Sell stock",
      Done: "<->",
      URL: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    },
    {
      "Topic:": "Array",
      "Problem: ":
        "find all pairs on integer array whose sum is equal to given number",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1",
    },
    {
      "Topic:": "Array",
      "Problem: ": "find common elements In 3 sorted arrays",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/common-elements1132/1",
    },
    {
      "Topic:": "Array",
      "Problem: ":
        "Rearrange the array in alternating positive and negative items with O(1) extra space",
      Done: "<->",
      URL: "https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Find if there is any subarray with sum equal to 0",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/subarray-with-0-sum/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Find factorial of a large number",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "find maximum product subarray ",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Find longest coinsecutive subsequence",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence/0",
    },
    {
      "Topic:": "Array",
      "Problem: ":
        'Given an array of size n and a number k, fin all elements that appear more than " n/k " times.',
      Done: "<->",
      URL: "https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Maximum profit by buying and selling a share atmost twice",
      Done: "<->",
      URL: "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Find whether an array is a subset of another array",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Find the triplet that sum to a given value",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/triplet-sum-in-array/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Trapping Rain water problem",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/trapping-rain-water/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Chocolate Distribution problem",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Smallest Subarray with sum greater than a given value",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Three way partitioning of an array around a given value",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/three-way-partitioning/1",
    },
    {
      "Topic:": "Array",
      "Problem: ":
        "Minimum swaps required bring elements less equal K together",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together/0",
    },
    {
      "Topic:": "Array",
      "Problem: ":
        "Minimum no. of operations required to make an array palindrome",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/palindromic-array/0",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Median of 2 sorted arrays of equal size",
      Done: "<->",
      URL: "https://practice.geeksforgeeks.org/problems/find-the-median0527/1",
    },
    {
      "Topic:": "Array",
      "Problem: ": "Median of 2 sorted arrays of different size",
      Done: "<->",
      URL: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/",
    },
  ],
};

export const Array = () => {
  useEffect(() => {
    const active = window.localStorage.getItem("color-key");
    console.log("color-key");
    setActive(JSON.parse(active));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key", JSON.stringify(active));
  });

  useEffect(() => {
    const active1 = window.localStorage.getItem("color-key1");
    console.log("color-key1");
    setActive1(JSON.parse(active1));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key1", JSON.stringify(active1));
  });

  useEffect(() => {
    const active2 = window.localStorage.getItem("color-key2");
    console.log("color-key2");
    setActive2(JSON.parse(active2));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key2", JSON.stringify(active2));
  });

  useEffect(() => {
    const active3 = window.localStorage.getItem("color-key3");
    console.log("color-key3");
    setActive3(JSON.parse(active3));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key3", JSON.stringify(active3));
  });

  useEffect(() => {
    const active4 = window.localStorage.getItem("color-key4");
    console.log("color-key4");
    setActive4(JSON.parse(active4));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key4", JSON.stringify(active4));
  });

  useEffect(() => {
    const active5 = window.localStorage.getItem("color-key5");
    console.log("color-key5");
    setActive5(JSON.parse(active5));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key5", JSON.stringify(active5));
  });

  useEffect(() => {
    const active6 = window.localStorage.getItem("color-key6");
    console.log("color-key6");
    setActive6(JSON.parse(active6));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key6", JSON.stringify(active6));
  });

  useEffect(() => {
    const active7 = window.localStorage.getItem("color-key7");
    console.log("color-key7");
    setActive7(JSON.parse(active7));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key7", JSON.stringify(active7));
  });

  useEffect(() => {
    const active8 = window.localStorage.getItem("color-key8");
    console.log("color-key8");
    setActive8(JSON.parse(active8));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key8", JSON.stringify(active8));
  });

  useEffect(() => {
    const active9 = window.localStorage.getItem("color-key9");
    console.log("color-key9");
    setActive9(JSON.parse(active9));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key9", JSON.stringify(active9));
  });

  useEffect(() => {
    const active10 = window.localStorage.getItem("color-key10");
    console.log("color-key10");
    setActive10(JSON.parse(active10));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key10", JSON.stringify(active10));
  });

  useEffect(() => {
    const active11 = window.localStorage.getItem("color-key11");
    console.log("color-key11");
    setActive11(JSON.parse(active11));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key11", JSON.stringify(active11));
  });

  useEffect(() => {
    const active12 = window.localStorage.getItem("color-key12");
    console.log("color-key12");
    setActive12(JSON.parse(active12));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key12", JSON.stringify(active12));
  });

  useEffect(() => {
    const active13 = window.localStorage.getItem("color-key13");
    console.log("color-key13");
    setActive13(JSON.parse(active13));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key13", JSON.stringify(active13));
  });

  useEffect(() => {
    const active14 = window.localStorage.getItem("color-key14");
    console.log("color-key14");
    setActive14(JSON.parse(active14));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key14", JSON.stringify(active14));
  });

  useEffect(() => {
    const active15 = window.localStorage.getItem("color-key15");
    console.log("color-key15");
    setActive15(JSON.parse(active15));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key15", JSON.stringify(active15));
  });

  useEffect(() => {
    const active16 = window.localStorage.getItem("color-key16");
    console.log("color-key16");
    setActive16(JSON.parse(active16));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key16", JSON.stringify(active16));
  });

  useEffect(() => {
    const active17 = window.localStorage.getItem("color-key17");
    console.log("color-key17");
    setActive17(JSON.parse(active17));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key17", JSON.stringify(active17));
  });

  useEffect(() => {
    const active18 = window.localStorage.getItem("color-key18");
    console.log("color-key18");
    setActive18(JSON.parse(active18));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key18", JSON.stringify(active18));
  });

  useEffect(() => {
    const active19 = window.localStorage.getItem("color-key19");
    console.log("color-key19");
    setActive19(JSON.parse(active19));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key19", JSON.stringify(active19));
  });

  useEffect(() => {
    const active20 = window.localStorage.getItem("color-key20");
    console.log("color-key20");
    setActive20(JSON.parse(active20));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key20", JSON.stringify(active20));
  });

  useEffect(() => {
    const active21 = window.localStorage.getItem("color-key21");
    console.log("color-key21");
    setActive21(JSON.parse(active21));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("color-key21", JSON.stringify(active21));
  });

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
    alert("Question has been marked as done");
  };

  const [active1, setActive1] = useState(false);
  const handleClick1 = () => {
    setActive1(!active1);
    alert("Question has been marked as done");
  };

  const [active2, setActive2] = useState(false);
  const handleClick2 = () => {
    setActive2(!active2);
    alert("Question has been marked as done");
  };

  const [active3, setActive3] = useState(false);
  const handleClick3 = () => {
    setActive3(!active3);
    alert("Question has been marked as done");
  };

  const [active4, setActive4] = useState(false);
  const handleClick4 = () => {
    setActive4(!active4);
    alert("Question has been marked as done");
  };

  const [active5, setActive5] = useState(false);
  const handleClick5 = () => {
    setActive5(!active5);
    alert("Question has been marked as done");
  };

  const [active6, setActive6] = useState(false);
  const handleClick6 = () => {
    setActive6(!active6);
    alert("Question has been marked as done");
  };

  const [active7, setActive7] = useState(false);
  const handleClick7 = () => {
    setActive7(!active7);
    alert("Question has been marked as done");
  };

  const [active8, setActive8] = useState(false);
  const handleClick8 = () => {
    setActive8(!active8);
    alert("Question has been marked as done");
  };

  const [active9, setActive9] = useState(false);
  const handleClick9 = () => {
    setActive9(!active9);
    alert("Question has been marked as done");
  };

  const [active10, setActive10] = useState(false);
  const handleClick10 = () => {
    setActive10(!active10);
    alert("Question has been marked as done");
  };

  const [active11, setActive11] = useState(false);
  const handleClick11 = () => {
    setActive11(!active11);
    alert("Question has been marked as done");
  };

  const [active12, setActive12] = useState(false);
  const handleClick12 = () => {
    setActive12(!active12);
    alert("Question has been marked as done");
  };

  const [active13, setActive13] = useState(false);
  const handleClick13 = () => {
    setActive13(!active13);
    alert("Question has been marked as done");
  };

  const [active14, setActive14] = useState(false);
  const handleClick14 = () => {
    setActive14(!active14);
    alert("Question has been marked as done");
  };

  const [active15, setActive15] = useState(false);
  const handleClick15 = () => {
    setActive15(!active15);
    alert("Question has been marked as done");
  };

  const [active16, setActive16] = useState(false);
  const handleClick16 = () => {
    setActive16(!active16);
    alert("Question has been marked as done");
  };

  const [active17, setActive17] = useState(false);
  const handleClick17 = () => {
    setActive17(!active17);
    alert("Question has been marked as done");
  };

  const [active18, setActive18] = useState(false);
  const handleClick18 = () => {
    setActive18(!active18);
    alert("Question has been marked as done");
  };

  const [active19, setActive19] = useState(false);
  const handleClick19 = () => {
    setActive19(!active19);
    alert("Question has been marked as done");
  };

  const [active20, setActive20] = useState(false);
  const handleClick20 = () => {
    setActive20(!active20);
    alert("Question has been marked as done");
  };

  const [active21, setActive21] = useState(false);
  const handleClick21 = () => {
    setActive21(!active21);
    alert("Question has been marked as done");
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
          <table className="bold">
            <thead>
              <tr>
                <th></th>
                <th className="id">ID</th>
                <th>Questions</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              {data.Sheet1.map((item, index) => (
                <tr key={index} className="clr">
                  <td>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: item.Done ? "salmon" : "",
                      }}
                      onClick={() => handleButtonClick(index)}
                    ></button>
                  </td>
                  <td>{index + 1}</td>
                  <td className="Q">{item["Problem: "]}</td>
                  <td id="img">
                    <a href={item.URL} target="_blank" rel="noreferrer">
                      <img
                        src={item.imageSrc}
                        alt={`Question ${index + 1} link`}
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Array;
