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
const Result = (props) => {
    const styles = StyleSheet.create({
        page: {
            // flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            borderBottom: "3px solid grey",
            paddingBottom: "10px",
            marginLeft: 30,
            marginRight: 30,
            marginTop: 30,
        },
        row: {
            flex: 1,
            flexDirection: 'row',
        },
        left: {
            padding: "10px",
            width: "65%",
            borderRight: "2px solid grey",
            display: "inline-block"
        },
        right: {
            padding: "10px",
            width: "30%",
            display: "inline-block",

        },
        header: {
            padding: 30,
            width: "100%",
            backgroundColor: "#303846",
            color: "white"
        }
    });
    let details = props.details
    console.log(props.details.education)
    const education_details = props.details.education.map(detail => {

        return (<>
            {detail.degree_name}
            {detail.school}
        </>)

    })

    return (
        <>
            
            <PDFViewer>
                <Document style={styles.document}>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.header}>
                            <Text style={{ fontSize: "30px" }}>{details.first_name} {details.last_name}, {details.job_title}</Text>
                            <Text></Text>
                            <Text>{details.email}</Text>

                        </View>
                        <View style={styles.row}>
                            <View style={styles.left}>
                                <View style={styles.section}>
                                    <Text style={{ fontSize: "15px", marginBottom: "10px" }}>Professional Summary</Text>
                                    <Text style={{ fontSize: "10px", }}>{details.summary}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={{ fontSize: "15px", marginBottom: "10px" }}>Education</Text>
                                    <Text style={{ fontSize: "10px", }}>{education_details}</Text>
                                </View>
                            </View>

                            <View style={styles.right}>
                                <Text style={{ fontSize: "15px" }}>Personal Details</Text>

                            </View>
                        </View>

                    </Page>
                </Document>
            </PDFViewer>
        </>
    )
}

export default Result