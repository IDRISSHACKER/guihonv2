import homePage from './home.page.vue'

import { describe, test, expect } from 'vitest'

describe("Home page", ()=>{

  test("Render corectly home page", async ()=>{
    expect(homePage).toBeTruthy()
  })
})
