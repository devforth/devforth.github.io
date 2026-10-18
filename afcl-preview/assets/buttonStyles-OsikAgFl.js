import{t as e}from"./classMerge-T_p4CRQW.js";var t=`
  flex items-center justify-center
  gap-1.5 border focus-visible:ring-[3px] focus:outline-none
  font-medium rounded-default whitespace-nowrap
  text-sm leading-5 px-3.5 py-1.5 text-center transition-colors duration-150
`,n={primary:`
    text-lightButtonsText bg-lightButtonsBackground border-lightButtonsBorder
    focus-visible:ring-lightButtonFocusRing

    dark:text-darkButtonsText dark:bg-darkButtonsBackground dark:border-darkButtonsBorder
    dark:focus-visible:ring-darkButtonFocusRing
  `,secondary:`
    text-lightSecondaryContrast/90 bg-lightSecondary border-lightSecondaryContrast/[0.17]
    focus-visible:ring-lightFocusRing

    dark:text-darkSecondaryContrast/80 dark:bg-darkSecondary dark:border-darkSecondaryContrast/[0.17]
    dark:focus-visible:ring-darkFocusRing
  `,danger:`
    text-lightAcceptModalConfirmButtonText dark:text-darkAcceptModalConfirmButtonText
    bg-lightAcceptModalConfirmButtonBackground dark:bg-darkAcceptModalConfirmButtonBackground
    focus-visible:ring-lightAcceptModalConfirmButtonFocus dark:focus-visible:ring-darkAcceptModalConfirmButtonFocus
    border-transparent
  `,"danger-soft":`
    text-lightDanger bg-lightSecondary border-lightDangerBorder focus-visible:ring-lightDanger/20
    dark:text-darkDanger dark:bg-darkSecondary dark:border-darkDangerBorder dark:focus-visible:ring-darkDanger/30
  `,ghost:`
    bg-transparent border-transparent text-lightInputIconColor focus-visible:ring-lightFocusRing
    dark:text-darkInputIconColor dark:focus-visible:ring-darkFocusRing
  `},r={primary:`
    hover:bg-lightButtonsHover hover:border-lightButtonsBorderHover
    dark:hover:bg-darkButtonsHover dark:hover:border-darkButtonsBorderHover
  `,secondary:`
    hover:bg-lightSecondaryDarken hover:text-lightSecondaryContrast
    dark:hover:bg-darkSecondaryLighten dark:hover:text-darkSecondaryContrast
  `,danger:`
    hover:bg-lightAcceptModalConfirmButtonBackgroundHover hover:border-transparent
    dark:hover:bg-darkAcceptModalConfirmButtonBackgroundHover
  `,"danger-soft":`
    hover:bg-lightDangerSoft dark:hover:bg-darkDangerSoft
  `,ghost:`
    hover:bg-lightSecondaryDarken hover:text-lightInputText
    dark:hover:bg-darkSecondaryLighten dark:hover:text-darkInputText
  `};Object.fromEntries(Object.entries(n).map(([e,t])=>[e,`${t} ${r[e]}`]));var i={md:``,sm:`h-7 py-0 px-2.5 text-xs`},a={md:`h-[2.125rem] w-[2.125rem] shrink-0 p-0 [&>svg]:w-4 [&>svg]:h-4`,sm:`w-7 shrink-0 p-0 [&>svg]:w-4 [&>svg]:h-4`};function o(o,...s){let c=o.variant??`primary`,l=o.size??`md`;return e(t,n[c],!o.disabled&&r[c],i[l],o.iconOnly&&a[l],o.shadow&&c!==`ghost`&&`af-button-shadow`,o.active&&`active brightness-200 hover:brightness-150`,o.disabled&&`cursor-not-allowed opacity-50`,...s)}export{o as t};