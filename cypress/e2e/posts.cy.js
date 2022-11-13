describe('Testing basic Angular registration', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:3001/ghost/#/signin')
        cy.wait(7000)
    })
    it('Do a login and publish a post and see it on the post list', () => {
        cy.fixture('/properties.json').then((ourFixture) => {
            cy.get('#identification').type(ourFixture.email)
            cy.get('#password').type(ourFixture.password)
            cy.wait(2000)
            cy.get('#ember7').click()
            cy.wait(10000)
            cy.get('#ember22').click()
            cy.wait(2000)
            cy.get('section.view-actions > a').click()
            cy.wait(2000)
            cy.get('textarea.ember-text-area').type('Post test 1')
            cy.wait(2000)
            cy.get('div.koenig-editor__editor.__mobiledoc-editor').click()
            cy.wait(2000)
            cy.get('.gh-publish-trigger span').click()
            cy.wait(4000)
            cy.get('.gh-btn-large span').click()
            cy.wait(4000)
            cy.get('.gh-btn-large span').click()
            cy.wait(4000)
            cy.get('.gh-back-to-editor span').click()
            cy.wait(4000)
            cy.get('div.flex.items-center.pe-auto.h-100 > a.ember-view.gh-btn-editor.gh-editor-back-button').click()
            cy.wait(4000)
            cy.get('.gh-posts-list-item-labs .gh-content-entry-title').then(($items) => {
                expect($items.find(item => item.innerText == "Post test 1")).not.to.be.undefined
            })
        })
    })
    it('Do a login and schedule a post and see it on the post list', () => {
        cy.fixture('/properties.json').then((ourFixture) => {
            cy.get('#identification').type(ourFixture.email)
            cy.get('#password').type(ourFixture.password)
            cy.wait(2000)
            cy.get('#ember7').click()
            cy.wait(10000)
            cy.get('#ember22').click()
            cy.wait(2000)
            cy.get('section.view-actions > a').click()
            cy.wait(2000)
            cy.get('textarea.ember-text-area').type('Post scheduled test 1')
            cy.wait(2000)
            cy.get('div.koenig-editor__editor.__mobiledoc-editor').click()
            cy.wait(2000)
            cy.get('.gh-publish-trigger span').click()
            cy.wait(2000)
            cy.get('.gh-publish-setting.last > button').click()
            cy.wait(2000)
            cy.get('div .gh-publish-schedule .gh-radio:nth-child(2)').click()
            cy.wait(2000)
            cy.get('.gh-btn-large span').click()
            cy.wait(2000)
            cy.get('.gh-btn-large span').click()
            cy.wait(2000)
            cy.get('.gh-publish-back-button span').click()
            cy.wait(2000)
            cy.get('div.flex.items-center.pe-auto.h-100 > a.ember-view.gh-btn-editor.gh-editor-back-button').click()
            cy.wait(2000)
            cy.get('.gh-posts-list-item-labs .gh-content-entry-title').then(($items) => {
                expect($items.find(item => item.innerText == "Post scheduled test 1")).not.to.be.undefined
            })
        })
    })
    it('Do a ligin and get a draft post and see it on the post list', () => {
        cy.fixture('/properties.json').then((ourFixture) => {
            cy.get('#identification').type(ourFixture.email)
            cy.get('#password').type(ourFixture.password)
            cy.wait(2000)
            cy.get('#ember7').click()
            cy.wait(10000)
            cy.get('#ember22').click()
            cy.wait(2000)
            cy.get('section.view-actions > a').click()
            cy.wait(2000)
            cy.get('textarea.ember-text-area').type('Draft post test 1')
            cy.wait(2000)
            cy.get('div.koenig-editor__editor.__mobiledoc-editor').click()
            cy.wait(2000)
            cy.get('div.flex.items-center.pe-auto.h-100 > a.ember-view.gh-btn-editor.gh-editor-back-button').click()
            cy.wait(2000)
            cy.get('.gh-posts-list-item-labs .gh-content-entry-title').then(($items) => {
                expect($items.find(item => item.innerText == "Draft post test 1")).not.to.be.undefined
            })
        })
    })
    it('Do a login and public a draft post and delete it over draft post list', () => {
        cy.fixture('/properties.json').then((ourFixture) => {
            cy.get('#identification').type(ourFixture.email)
            cy.get('#password').type(ourFixture.password)
            cy.wait(2000)
            cy.get('#ember7').click()
            cy.wait(10000)
            cy.get('#ember22').click()
            cy.wait(2000)
            cy.get('section.view-actions > a').click()
            cy.wait(2000)
            cy.get('textarea.ember-text-area').type('Draft post test 1 to delete')
            cy.wait(4000)
            cy.get('div.koenig-editor__editor.__mobiledoc-editor').click()
            cy.wait(2000)
            cy.get('div.flex.items-center.pe-auto.h-100 > a.ember-view.gh-btn-editor.gh-editor-back-button').click()
            cy.wait(2000)
            cy.get('ul.gh-nav-view-list > li:first-child > a').click()
            cy.wait(2000)
            cy.get('ol.posts-list.gh-list.feature-memberAttribution > li.gh-list-row:nth-child(1) > a:nth-child(4)').click()
            cy.wait(2000)
            cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click()
            cy.wait(2000)
            cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
            cy.wait(2000)
            cy.get('.modal-footer .gh-btn:not(:first-child)').click()
            cy.wait(10000)
            cy.get('.gh-posts-list-item-labs .gh-content-entry-title').then(($items) => {
                expect($items.find(item => item.innerText == "Draft post test 1 to delete")[0]).to.be.undefined
            })
        })
    })
    it('Do a login and publish a post and see it on the post list', () => {
        cy.fixture('/properties.json').then((ourFixture) => {
            cy.get('#identification').type(ourFixture.email)
            cy.get('#password').type(ourFixture.password)
            cy.wait(2000)
            cy.get('#ember7').click()
            cy.wait(10000)
            cy.get('#ember22').click()
            cy.wait(2000)
            cy.get('section.view-actions > a').click()
            cy.wait(2000)
            cy.get('textarea.ember-text-area').type('Post test 1')
            cy.wait(2000)
            cy.get('div.koenig-editor__editor.__mobiledoc-editor').click()
            cy.wait(2000)
            cy.get('.gh-publish-trigger span').click()
            cy.wait(4000)
            cy.get('.gh-btn-large span').click()
            cy.wait(4000)
            cy.get('.gh-btn-large span').click()
            cy.wait(4000)
            cy.get('.gh-back-to-editor span').click()
            cy.wait(4000)
            cy.get('div.flex.items-center.pe-auto.h-100 > a.ember-view.gh-btn-editor.gh-editor-back-button').click()
            cy.wait(4000)
            cy.get('ul.gh-nav-view-list > li:nth-child(3) > a').click()
            cy.wait(4000)
            cy.get('ol.posts-list.gh-list.feature-memberAttribution > li.gh-list-row:nth-child(1) > a:nth-child(4)').click()
            cy.wait(2000)
            cy.get('.gh-tabs-analytics .tab-list h3').then(($h3) => {
                expect($h3[0].innerText).to.equal('0')
            })
        })
    })
  })
