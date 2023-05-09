import { Container, Typography } from '@material-ui/core'
import { Alert } from '@mui/material'
import React from 'react';
import { Button } from 'react-bootstrap';
import "./problem.css"

const problem = () => {
  return (
    <div>
      
        <Container fluid>
          <br/>
        <Alert severity="info">Chocolate Problem --- updated daily to keep yourself involved in DSA</Alert>

        <Typography>
          <h3 className='h3'>Today's Question</h3>
        
          <p className='ques'>Chocolate Distribution Problem</p>
  
            <h3 className='h3'>Introduction</h3>
     <p> Given an array of N integers where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that:
Each student gets one packet.
The difference between the number of chocolates in the packet with maximum chocolates and the packet with minimum chocolates given to the students is minimum.</p>  


<h3 className='h3'>Efficient Approach for Chocolate Distribution Problem</h3>
<p>
The idea is based on the observation that to minimize the difference, we must choose consecutive elements from a sorted packet. We first sort the array arr[0..n-1], then find the subarray of size m with the minimum difference between the last and first elements.</p>

<h3 className='h3'>Actual Implementation</h3>
<Button className='butt' href='https://www.geeksforgeeks.org/chocolate-distribution-problem/' target="_blank">Refer to GeeksForGeeks for help</Button>

<br/>
<br/>
        </Typography>
        </Container>

    </div>
  )
}

export default problem