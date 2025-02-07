import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible()

  await expect(
    page.getByText('-5% em relação a ontem', { exact: true }),
  ).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await expect(page.getByText('20', { exact: true }).first()).toBeVisible()
  await expect(
    page.getByText('+7% em relação ao mês passado', { exact: true }),
  ).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await expect(page.getByText('200', { exact: true })).toBeVisible()
  await expect(
    page.getByText('-5% em relação ao mês passado', { exact: true }),
  ).toBeVisible()
})

test('display month revenue orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await expect(page.getByText('R$ 300,00', { exact: true })).toBeVisible()
  await expect(
    page.getByText('+15% em relação a ontem', { exact: true }),
  ).toBeVisible()
})
