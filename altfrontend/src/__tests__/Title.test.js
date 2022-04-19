import Title from '../components/Title'


test('title function display.', () => {

    const h1="Company Employee Directory"

    expect(h1).toMatch(/Company Employee Directory/);
});


test('title function display w/const', () => {

    const h1="Company Employee Directory"

    expect(Title).toMatch(h1);
});