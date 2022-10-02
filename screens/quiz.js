import React, { Component, useEffect, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [option,setoptions]=useState([]);
    const[score,setscore] = useState([]);
    const[isloading,setisloading]=useState(false);


    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986'
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        setoptions( generateOptionsAndShuffle(data.results[0]));
        

    };
    useEffect(() => { getQuiz() }, []);

    const handleNextPress=()=> {
        setQues(ques + 1);
        setQuestions(generateOptionsAndShuffle(questions[ques + 1]));
    }
    const generateOptionsAndShuffle=(_question) => {
        const option=[..._question.incorrect_answers]
        option.push(_questions.incorrect_answers)
        shuffleArray(option)
        return option }

    const handleSelectOption=(_option) => 
    {
        if(-option===questions[ques].correct_answer)
        {
            setscore(score+10)
        }
        if(ques!==9)
        {  setQues(ques + 1)
            setQuestions(generateOptionsAndShuffle(questions[ques+1])); 
        }
        if(ques===9)
        {
            handleShowResult()
        }

        }
        
    const handleShowResult=()=>
    {
        navigation.navigate('Result',{
            score:score
        })
    }



    return (
        <View style={styles.container}>
            {isloading ? <View style={ {display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
            <Text style={{fontSize:32,fontWeight:'700'}}>
                Loading....
            </Text></View> :questions && (
                <View style={styles.parent} >
                    <View style={styles.top}>
                        <Text style={styles.question}> Q. Quiz Page{decodeURIComponent(questions[ques].question)} </Text>
                    </View>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.optionButton} onPress={()=> handleSelectOption(option[0])}>
                            <Text style={styles.option}>{decodeURIComponent(option[0])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(option[0])}>
                            <Text style={styles.option}>{decodeURIComponent(option[1])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(option[0])}>
                            <Text style={styles.option}>{decodeURIComponent(option[2])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOption(option[0])}>
                            <Text style={styles.option}>{decodeURIComponent(option[3])}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Prev</Text>
                        </TouchableOpacity>
                        {ques !== 9 && <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                            <Text style={styles.buttonText}>SKIP</Text>
                        </TouchableOpacity>}
                        {ques !== 9 && <TouchableOpacity style={styles.button} onPress={handleShowResult}>
                            <Text style={styles.buttonText}>SHOW RESULT</Text>
                        </TouchableOpacity>}
                        <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                            <Text>SHOW RESULT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

        </View>

    );
};

export default Quiz
const styles = StyleSheet.create({

    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: "100%",
    },
    top: {
        marginVertical: 16,

    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddinVertical: 16,
        justifyContent: "space-between",
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,

    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    question: {
        fontSize: 28,
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',

    },
    optionButton: {
        padding: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: "100%",
    },

});
