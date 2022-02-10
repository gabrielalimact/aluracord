import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

function GlobalStyle(){
    return(
        <style jsx global>{`
            *{
                padding: 0;
                margin:0;
                box-sizing: border-box;
                list-style: none;
            }
            body {
                font-family: 'Open Sans', sans-serif;
            }
            /* App fit Height */ 
            html, body, #__next {
                min-height: 100vh;
                display: flex;
                flex:1;
            }

            #__next {
                flex:1;
            }
            #__next > * {
                flex:1;
            }
            /* ./App fit Height */ 
        `}</style>
    )
}

function Title(props){
    console.log(props)
    const Tag = props.tag
    return(
        <> 
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag}{
                    color:${appConfig.theme.colors.neutrals['000']};
                    font-size:24px;
                    font-weight:600;
                }
            `}</style>
        </>
    )
}


// function HomePage() {
//   return (
//     <div>
//         <GlobalStyle />

//         <Title tag='h2'>Boas vindas de volta!</Title>
//         <h3>AluraCord - Matrix</h3>
        
//     </div>
//   );
// }

export default function HomePage(){
    const username = 'gabrielalimact'
    return(
        <>
            <GlobalStyle />
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: `url(https://i.pinimg.com/originals/f3/8e/41/f38e413a04321ed0f6b848568ddc2650.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection:{
                            xs: 'column',
                            sm: 'row'
                        },
                        width: '100%',
                        maxWidth: '700px',
                        borderRadius:'5px', padding:'32px', margin:'16px',
                        boxShadow: '0 2 10 0 rgba(0,0,0 / 20%)',
                        backgroundColor: appConfig.theme.colors.primary[900],
                    }}
                >
                    {/* formulário */}
                    <Box
                        as='form'
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: {xs: '100%', sm:'50%'}, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag='h2'>Welcome to the dark side of the force!</Title>
                        <Text
                            variant='body3' styleSheet={{
                                marginBottom: '32px',
                                color: appConfig.theme.colors.neutrals[300],
                            }}
                        >{appConfig.name}</Text>
                        <TextField 
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button 
                            type='submit'
                            label='Join In'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals['000'],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorHighlight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>

                    <Box
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', 
                            maxWidth: '200px',
                            padding: '16px',
                            flex: 1,
                            minHeight: '240px',
                        }}

                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant='body4'
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px',
                            }}
                        >{username}</Text>
                    </Box>

                </Box>
            </Box>        
        </>         

        );
}