<script>
    // Importeren van de NPM components
    import {
        Carousel,
        ChapterContent,
        Footer,
        Header,
        MainHero,
        StandardSection,
        TitleTextAsset
    } from "cmd-midterm-components";

    import HamburgerComponent from '../../components/HamburgerComponent.svelte'
    import ChapterTitle from "../../components/ChapterTitle.svelte";
    import ChapterText from "../../components/ChapterText.svelte";
    import NavLink from "../../components/NavLink.svelte";

    // <Header />
    // let title = 'CMD Midterm';
    let isYellow = false

    // <MainHero />
    // let title = 'Main Hero Title';
    let image = 'images/detail-hero-image.jpg';
    let imageAlt = 'Alt text for image';
    let hasButtons = true;

    // <ChapterTitle />
    let number = 1.2
    // let title = '1.0 Beoogde leerresultaten';


    // <NavLink />
    let link = "link"
    let text = 'Main Hero Text';


    // <StandardSection />
    let sections = [
        {
            title: 'Section 1',
            links: [
                { text: 'Link 1', href: '/link1' },
                { text: 'Link 2', href: '/link2' },
            ],
        },
        {
            title: 'Section 2',
            links: [
                { text: 'Link 3', href: '/link3' },
                { text: 'Link 4', href: '/link4' },
            ],
        },
    ];


    // <TitleTextAsset />
    let title = 'TitleTextAsset titel'
    let src = 'images/detail-hero-image.jpg';
    let altText = 'Alt text for image';
    let imageLeft = true;
</script>

<div>
    <Header {title} {isYellow} >
        <HamburgerComponent></HamburgerComponent>
    </Header>

    <MainHero
            {title}
            {text}
            {image}
            {imageAlt}
            {hasButtons}>
    </MainHero>

    <Carousel></Carousel>
    <ChapterContent></ChapterContent>
    <ChapterTitle {number} {title}></ChapterTitle>
    <ChapterText></ChapterText>
    <NavLink {link} {text}></NavLink>

    <StandardSection {sections}></StandardSection>

    <TitleTextAsset
            title={title}
            text={text}
            src={src}
            altText={altText}
            imageLeft={imageLeft}></TitleTextAsset>

    <Footer ></Footer>
</div>