import React from 'react'
import {
    Text,
    Page,
    View,
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
        section_title: {
            marginBottom: "5px",
            fontSize: "20px"
        },
        summary: {
            borderBottom: "3px solid grey",
            paddingBottom: "10px",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
        },
        section: {
            borderBottom: "3px solid grey",
            paddingBottom: "10px",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
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
    const education_details = props.details.education.map(detail => {
        return (<>
            <View style={{ marginBottom: "5px" }}>
                <Text style={{ fontSize: "15px" }}>{detail.degree_name}, {detail.school}</Text>
                <Text style={{ fontSize: "10px" }}>{detail.startDate} - {detail.endDate}, {detail.city}</Text>
                <Text style={{ fontSize: "10px", marginLeft: "10px", marginTop: "5px" }}>{detail.description}</Text>
            </View>
        </>)

    })
    const experience_details = props.details.experience.map(detail => {

        return (<>
            <View style={{ marginBottom: "5px" }}>
                <Text style={{ fontSize: "15px" }}>{detail.job_title}, {detail.employer}</Text>
                <Text style={{ fontSize: "10px" }}>{detail.startDate} - {detail.endDate}, {detail.city}</Text>
                <Text style={{ fontSize: "10px", marginLeft: "10px", marginTop: "5px" }}>{detail.description}</Text>
            </View>
        </>)

    })
    const skillsDetails = props.details.skills.map(detail => {

        return (<>
            <Text style={{ fontSize: "10px", marginLeft:"5px" }}>- {detail}</Text>
        </>)

    })
    return (
        <>

            <PDFViewer>
                <Document style={styles.document}>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.header}>
                            <Text style={{ fontSize: "30px" }}>{details.first_name} {details.last_name}, {details.job_title}</Text>
                            <Text>{details.email}</Text>

                        </View>
                        <View style={styles.row}>
                            <View style={styles.left}>
                                <View style={styles.summary}>
                                    <Text style={{ fontSize: "20px", marginBottom: "5px" }}>Professional Summary</Text>
                                    <Text style={{ fontSize: "10px", }}>{details.summary}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.section_title}>Education</Text>
                                    {education_details}
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.section_title}>Experience</Text>
                                    {experience_details}
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.section_title}>Projects</Text>
                                </View>
                            </View>

                            <View style={styles.right}>
                                <View>
                                    <Text style={{ fontSize: "15px" }}>Personal Details</Text>
                                    <Text style={{ fontSize: "10px" }}>{details.phone}</Text>
                                    <Text style={{ fontSize: "10px" }}>{details.country}, {details.city}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: "15px" }}>Skills</Text>
                                    {skillsDetails}
                                </View>
                                <Text style={{ fontSize: "15px" }}>Languages</Text>
                            </View>
                        </View>

                    </Page>
                </Document>
            </PDFViewer>
        </>
    )
}

export default Result