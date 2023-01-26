import React from 'react'
import Templates from './Result';
import {
    Text,
    Font,
    Page,
    View,
    Image,
    Document,
    StyleSheet,
    PDFViewer
} from '@react-pdf/renderer';
const Builder = () => {
    const styles = StyleSheet.create({
        page: {
            // flexDirection: 'row',
            backgroundColor: '#E4E4E4',
            height: "300px",
            border: "3px solid black",
            display: "inline-block",
        },
        section: {
            padding: 10,
            width: "100%",
            height: "200px",
            backgroundColor: "#03DAC6"
        },
        document: {
            width: "300px",
            height: "400px",
            border: "3px solid black"
        }
    });
    let details = {
        job_title: "Developer",
        first_name: "John",
        last_name: "Smith",
        email: "johnsmith@gmail.com"
    }
    return (
        <div className='container'>

            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>{details.first_name} {details.last_name}</Text>
                    <Text>{details.job_title}</Text>
                    <Text>{details.email}</Text>
                </View>
            </Page>

        </div>
    )
}

export default Builder