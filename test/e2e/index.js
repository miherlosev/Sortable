import IndexPage from './index-page-model';

const indexPage = new IndexPage();

fixture `Tests`
    .page('http://localhost:8080/index.html');

test('List A', async t => {
    const listA      = indexPage.listA;
    const firstItem  = listA.items.nth(0);
    const secondItem = listA.items.nth(1);
    const foodText   = 'Корм';
    const hippoText  = 'Бегемот';

    await t
        .expect(firstItem.innerText).eql(hippoText)
        .expect(secondItem.innerText).eql(foodText)
        .dragToElement(firstItem, secondItem)
        .expect(firstItem.innerText).eql(foodText)
        .expect(secondItem.innerText).eql(hippoText);
});




