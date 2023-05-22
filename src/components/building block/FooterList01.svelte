<script>
    let footerList = [
        {
            title: '1.0 Beoogde leerresultaten',
            href: '/beoogdeleerresultaten',
            items: [
                { text: '1.01 Humanity-centered digital designers' },
                { text: '1.02 Competenties' },
                { text: '1.03 Werkveld en maatschappij' },
                { text: '1.04 Ontwikkelingen' },
                { text: '1.05 Ambities en dilemma’s' },
            ],
        },
        {
            title: '2.0 Onderwijsleeromgeving',
            href: '/onderwijsleeromgeving',
            items: [
                { text: '2.01 Onderwijsvisie en didactiek' },
                { text: '2.02 Curriculumopbouw' },
                { text: '2.03 Borging onderwijskwaliteit' },
                { text: '2.04 Onderwijs en praktijk' },
                { text: '2.05 Onderwijs en onderzoek' },
                { text: '2.06 Internationalisering' },
                { text: '2.07 Studenten begeleiding' },
                { text: '2.08 Digitale en analoge voorzieningen' },
                { text: `2.09 Ambities en dilemma's` },
            ],
        },
        {
            title: '3.0 Toetsing',
            href: '/toetsing',
            items: [
                { text: '3.01 Toetsbeleid en -plan' },
                { text: '3.02 Toetsprogramma en -praktijk' },
                { text: '3.03 Toetsing en feedback' },
                { text: '3.04 Borging en kwaliteit' },
                { text: `3.05 Ambities en dilemma's` },
            ],
        },
        {
            title: '4.0 Gerealiseerde leerresultaten',
            href: '/gerealiseerde-leerresultaten',
            items: [
                { text: '4.01 Afstudeerproces' },
                { text: '4.02 Borging afstudeerniveau vanuit examencommissie' },
                { text: `4.03 Ambities en dilemma's` },
            ],
        },
    ];
</script>

<section class="footer-list__section">
        <ul class="footer-list">
            <li class="footer-item__header">
                <a href="{ href }">{ title }</a>
            </li>
            <li class="footer-item">{ text }</li>
        </ul>
</section>