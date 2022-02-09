import styled from "styled-components";
const Style = styled.div `
        ul {
            display: flex;
            li{
                a{
                    display:block;
                    padding: 20px;
                    color:rgba(0,0,0,.87);
                    &:hover{
                        background: rgba(0,0,0,.03);
                        color:rgba(0,0,0,.95);
                    }
                }
                
            }
        }
`;
export default Style;