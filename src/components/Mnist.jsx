import React from 'react'
import styledComponents from 'styled-components'
import * as tf from "@tensorflow/tfjs"

function Mnist() {
    async function loadMnistModel() {
        const model = await tf.loadLayersModel("file://../../public/model.json");
        console.log("loaded!!");
    }

    return (
        <Container>
            {/* <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.8.0"></script> */}
            <Title>MnistをTESTしたい</Title>
            <MnistButton onClick={() => loadMnistModel()}>実行！</MnistButton>
        </Container>
    )
}

export default Mnist


const Container = styledComponents.div`
    margin: 0rem 1rem;
    padding: 1rem;
`;

const Title = styledComponents.div`
    margin: 1rem 0;
    padding: 1rem 0;
    font-size: 2rem;
`;

const MnistButton = styledComponents.button`

`;