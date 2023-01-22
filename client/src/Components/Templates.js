import React from 'react'
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
  
  import Header from './Header';
  import Skills from './Skills';
  import Education from './Education';
  import Experience from './Experience';
const Templates = () => {
    const styles = StyleSheet.create({
        page: {
            // flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            padding: 10,
            width: "100%",
            height: "200px",
            backgroundColor:"#03DAC6"
        },
        header:{
        }
    });
    let details = {
        job_title: "Developer",
        first_name: "John",
        last_name: "Smith",
        email: "johnsmith@gmail.com"
    }
    return (
        <div className='pdf-container'>
            <PDFViewer>
                <Document style= {styles.document}>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text>{details.first_name} {details.last_name}</Text>
                            <Text>{details.job_title}</Text>
                            <Text>{details.email}</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    )
}

export default Templates