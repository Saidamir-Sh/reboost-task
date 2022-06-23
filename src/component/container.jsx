import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ContainerBox() {

    const [boxProps, setboxProps] = useState([])
    console.log(boxProps)

    const fetchData = async () => {
        try {
            let response = await fetch('https://my.api.mockaroo.com/color_api.json?key=48290230')
            if(response.ok) {
                let data = await response.json()
                let elements = data.slice(0, 12)
                setboxProps(elements)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
     } , [])

  return (
    <Container>
        <Row>
            {
                boxProps.map((boxProp) => (
                    <Col className="m-1 d-flex justify-center" key={boxProp.text} style={{backgroundColor: boxProp.color}}>
                        <p className='text-white text-center'>{boxProp.text}</p>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default ContainerBox