import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import "./About.css"
const About = () => {
    return (
        <div>
            <Banner></Banner>
            <h1>About Us</h1>
            <p className="dis">
                The "Webometrics Ranking of World Universities" is an initiative of the Cybermetrics Lab, a research group belonging to the Consejo Superior de Investigaciones Científicas (CSIC), the largest public research body in Spain.

                CSIC is among the first basic research organizations in Europe. The CSIC consisted in 2006 of 126 centers and institutes distributed throughout Spain.

                CSIC is attached to the Ministry of Education and its main objective is to promote scientific research as to improve the progress of the scientific and technological level of the country which will contribute to increase the welfare of the citizens.

                CSIC also plays an important role in the formation of new researchers and technicians in the different aspects of the science and the technology.

                The organization collaborates with other institutions of the Spanish R&D system (universities, autonomous governs, other public and private research organisms) and with social, economic, national or foreign agents to which contributes with its research capacity and human and material resources in the development of research projects or under the form of consultancy and scientific and technical support. CSIC was founded in 1939 from a previous body, the Junta para la Ampliación de Estudios e Investigaciones Científicas created in 1907 under the leadership of the Spanish Nobel Prize Prof. Ramón y Cajal.

                The laboratory is located at the Centro de Ciencias Humanas y Sociales (CCHS). This center started during 2007 and originated from the merge in one place of the different centers and institutes devoted to the Social and Humanity Sciences that belongs to the CSIC and were located in Madrid.

                The Cybermetrics Lab, part of the CSIC, is devoted to the quantitative analysis of the Internet and Web contents specially those related to the processes of generation and scholarly communication of scientific knowledge. This is a new emerging discipline that has been called Cybermetrics or Webometrics.

                The Cybermetrics Lab using quantitative methods has designed and applied indicators that allow us to measure the scientific activity on the Web. The cybermetric indicators are useful to evaluate science and technology and they are the perfect complement to the results obtained with bibliometric methods in scientometric studies.
            </p>
            <Footer></Footer>
        </div>
    );
};

export default About;