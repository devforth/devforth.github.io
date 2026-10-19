# Buttons and Inputs

> Buttons and Inputs of the AdminForth Components Library (AFCL) with live examples: Button, Button Group, Link, LinkButton, Select, Input, Code Input, Textarea, Checkbox, Toggle, Date picker, Dropzone.

import AfclPreview from '@site/src/components/AfclPreview';



Buttons, links and form inputs. Import the components from `@/afcl`, see [AdminForth Components Library](./index.md).

## Button

```js
import { Button } from '@/afcl'
```

```html
<div class="flex flex-wrap gap-3">
  <Button @click="doSmth">
    Your button text
  </Button>
  <Button @click="doSmth" :loader="true">
    Your button text
  </Button>
</div>
```

loader prop would show loader when it's true.

### Variant

The `variant` prop controls the button style. Possible values are `primary` (default), `secondary`, `danger`, `danger-soft` and `ghost`. `danger-soft` is a quieter destructive action with a red outline, e.g. Remove on a card next to secondary buttons. A `ghost` button has no border and no background until hover, use it for quiet actions like icons in table rows.

```js
import { Button } from '@/afcl'
```

```html
<div class="flex flex-wrap gap-3">
  <Button @click="doSmth">
    Primary button
  </Button>
  <Button @click="doSmth" variant="secondary">
    Secondary button
  </Button>
  <Button @click="doSmth" variant="danger">
    Danger button
  </Button>
  <Button @click="doSmth" variant="danger-soft">
    Danger soft button
  </Button>
  <Button @click="doSmth" variant="ghost">
    Ghost button
  </Button>
</div>
```

> ☝️ The `mode` prop is deprecated, use `variant` instead.

### Size

The `size` prop is `md` (default, 34px high) or `sm` (28px high).

```js
import { Button } from '@/afcl'
```

```html
<div class="flex flex-wrap items-center gap-3">
  <Button variant="secondary">
    Medium button
  </Button>
  <Button variant="secondary" size="sm">
    Small button
  </Button>
</div>
```

### Icon only

`iconOnly` makes a square button for one icon from the slot and sizes the icon to 16px. With `loader` the spinner takes the place of the icon.

```js
import { Button } from '@/afcl'
import { IconCheck, IconX, IconPencil, IconTrash2 } from '@iconify-prerendered/vue-lucide'
```

```html
<div class="flex flex-wrap items-center gap-3">
  <Button iconOnly>
    <IconCheck />
  </Button>
  <Button variant="secondary" iconOnly>
    <IconX />
  </Button>
  <Button iconOnly :loader="true">
    <IconCheck />
  </Button>
  <Button variant="ghost" size="sm" iconOnly>
    <IconPencil />
  </Button>
  <Button variant="ghost" size="sm" iconOnly>
    <IconTrash2 />
  </Button>
</div>
```

## Button Group

### With active button

```ts
import { ref } from 'vue'
import { ButtonGroup } from '@/afcl'
import { IconCircleUser, IconLayoutGrid } from '@iconify-prerendered/vue-lucide'

const activeButton = ref('Profile')
```

```html
<ButtonGroup v-model="activeButton">
  <template #button:Profile>
    <div class="flex items-center gap-2 px-4 py-2">
      <IconCircleUser class="w-4 h-4" />
      Profile
    </div>
  </template>
  <template #button:Dashboard>
    <div class="flex items-center gap-2 px-4 py-2">
      <IconLayoutGrid class="w-4 h-4" />
      Board
    </div>
  </template>
</ButtonGroup>
```

### With solid color

```ts
import { ButtonGroup } from '@/afcl'
import { IconPlus, IconChevronDown } from '@iconify-prerendered/vue-lucide'
```

```html
<ButtonGroup :solidColor="true">
  <template #button:Add>
    <div class="flex items-center gap-2 px-4 py-2">
      <IconPlus class="w-4 h-4" />
      Add Local Passkey
    </div>
  </template>
  <template #button:Dropdown>
    <div class="flex items-center px-2 py-2">
      <IconChevronDown class="w-4 h-4" />
    </div>
  </template>
</ButtonGroup>
```

## Link

```js
import { Link } from '@/afcl'
```

```html
<Link to="/login">Go to login</Link>
```

A `to` with a scheme (`https://`, `mailto:`, `tel:`, `otpauth:`) renders a plain link which leaves the app, other values are routes.

## LinkButton

Looks like button but works like link. Uses `router-link` under the hood. Takes the same `variant`, `size` and `iconOnly` props as `Button`.

```js
import { LinkButton } from '@/afcl'
```

```html
<LinkButton to="/login">Go to login</LinkButton>
```

## Select

### Single

```ts
import { ref } from 'vue'
import { Select } from '@/afcl'

const selected = ref(null)
```

```html
<Select
  class="w-full"
  :options="[
    {label: 'Last 7 days', value: '7'}, 
    {label: 'Last 30 days', value: '30'}, 
    {label: 'Last 90 days', value: '90'},
    {label: 'None', value: null}
  ]"
  v-model="selected"
></Select>
```

### Multiple

```ts
import { Select } from '@/afcl'
import { ref } from 'vue'

//diff-remove
const selected = ref(null)
//diff-add
const selected = ref([])
```

```html
<Select
  class="w-full"
  :options="[
    {label: 'Last 7 days', value: '7'}, 
    {label: 'Last 30 days', value: '30'}, 
    {label: 'Last 90 days', value: '90'},
    {label: 'None', value: null}
  ]"
  v-model="selected"
//diff-add
  multiple
></Select>
```

### Custom slots for item

You can customize item and selected item using slots.

```ts
import { Select } from '@/afcl'
import { ref } from 'vue'

const selected = ref(null)
```

```html
<Select
  class="w-full"
  :options="[
    {label: 'Last 7 days', value: '7', records: 110},
    {label: 'Last 30 days', value: '30', records: 320},
    {label: 'Last 90 days', value: '90', records: 310},
    {label: 'None', value: null}
  ]"
  v-model="selected"
>
//diff-add
  <template #item="{option}">
//diff-add
    <div>
//diff-add
      <span>{{ option.label }}</span>
//diff-add
      <span class="ml-2 opacity-50">{{ option.records }} records</span>
//diff-add
    </div>
//diff-add
  </template>
//diff-add
  <template #selected-item="{option}">
//diff-add
    <span>{{ option.label }} 💫</span>
//diff-add
  </template>
</Select>
```

### Extra item

You might need to put some extra item at bottom of list

```ts
import { Select, LinkButton } from '@/afcl'
import { ref } from 'vue'

const selected = ref(null)
```

```html
<Select
  class="w-full"
  :options="[
    {label: 'Last 7 days', value: '7'}, 
    {label: 'Last 30 days', value: '30'}, 
    {label: 'Last 90 days', value: '90'},
  ]"
  v-model="selected"
>
//diff-add
  <template #extra-item>
//diff-add
    <LinkButton to="/ranges">Manage ranges</LinkButton>
//diff-add
  </template>
</Select>
```

### Add classes to the input directly

Pass `classesForInput` to style the input of the select.

```ts
import { Select } from '@/afcl'
import { ref } from 'vue'

const selected = ref(null)
```

```html
<Select
  class="w-full"
  :options="[
    {label: 'Last 7 days', value: '7'}, 
    {label: 'Last 30 days', value: '30'}, 
    {label: 'Last 90 days', value: '90'},
  ]"
  v-model="selected"
//diff-add
  classesForInput="py-[4px] text-sm bg-white rounded"
></Select>
```

## Input

```js
import { Input } from '@/afcl'
```

```html
<Input type="number" class="w-full">
  <template #suffix>
    USD
  </template>
</Input>
```

```js
import { Input } from '@/afcl'
import { IconSearch } from '@iconify-prerendered/vue-lucide'
```

```html
<Input type="text" class="w-full">
  <template #rightIcon>
    <IconSearch class="w-4 h-4 text-lightInputIconColor dark:text-darkInputIconColor" />
  </template>
</Input>
```

`passwordToggle` adds a button which shows and hides the value of a `type="password"` input, `invalid` paints the border red:

```js
import { Input } from '@/afcl'
```

```html
<div class="flex flex-col gap-3">
  <Input type="password" passwordToggle fullWidth modelValue="correct horse" />
  <Input type="password" passwordToggle invalid fullWidth modelValue="short" />
</div>
```

## Code Input

An input for one-time codes, e.g. a 6-digit code from an authenticator app. It is one real field drawn as cells, so password managers and the browser fill the whole code at once, a pasted code with spaces or a dash (`123 456`) is cleaned, and screen readers read one field. Only digits are kept, `complete` is emitted when the last digit is entered.

```js
import { ref } from 'vue'
import { CodeInput } from '@/afcl'

const code = ref('')
const checked = ref('')
```

```html
<div class="flex flex-col gap-3">
  <CodeInput v-model="code" :groupSize="3" @complete="checked = $event" />
  <p class="text-sm">Completed code: {{ checked || '-' }}</p>
</div>
```

`invalid` paints the cells red, e.g. after a wrong code:

```js
import { CodeInput } from '@/afcl'
```

```html
<CodeInput modelValue="1234" :groupSize="3" invalid />
```

Props:

```ts
  length?: number // number of digits, 6 by default
  groupSize?: number // draws a dash after every groupSize digits, 0 (default) draws none
  invalid?: boolean
  disabled?: boolean
  autofocus?: boolean // focuses the field once it is shown, also inside a dialog
  // the code is the main control of the screen or dialog: after a click anywhere, e.g. on a copy button,
  // the focus comes back to it, Tab still moves on, and a code pasted anywhere on the page fills it
  keepFocus?: boolean
```

Attributes like `id`, `name` and `aria-labelledby` go to the field. Through a template ref the component exposes `focus()` and `clear()`, which empties the field and focuses it, e.g. after the server rejected the code.

## Textarea

```ts
import { ref } from 'vue'
import { Textarea } from '@/afcl'

const textAreaInput = ref('')
```

```html
<Textarea
  v-model="textAreaInput"
  placeholder="Enter some text..."
  class="w-64"
/>
```

## Checkbox

```ts
import { ref } from 'vue'
import { Checkbox } from '@/afcl'

const enable = ref(false)
```

```html
<Checkbox v-model="enable">
  Enable
</Checkbox>
```

## Toggle

```ts
import { ref } from 'vue'
import { Toggle } from '@/afcl'

const enabled = ref(false)
```

```html
<Toggle v-model="enabled" :disabled="false">
  <p>Click me</p>
</Toggle>
```

## Date picker

`type` sets the fields: `date` (default), `time`, or `datetime` with both side by side. `v-model` holds `2026-10-14` for a date, an ISO string in UTC for a datetime and `14:20:00` for a time. A date can be picked in the calendar or typed: parts in any order, a month as a word in the language of the admin or in English, e.g. `14 Jan 2026`, `Jan 14`, `14.01.2026`. Enter or leaving the field applies it, ArrowDown moves the focus into the calendar. `autoHide` closes the calendar once a day is picked, `readonly` disables the fields.

### Basic

```ts
import { ref } from 'vue'
import { DatePicker } from '@/afcl';

const datePickerValue = ref()
```

```html
<DatePicker
  v-model="datePickerValue"
  type="datetime"
  label="Pick start"
/>
```

## Dropzone

```ts
import { ref, watch } from 'vue'
import { Dropzone } from '@/afcl'

const files = ref<File[]>([])

watch(files, (files) => {
  console.log('files selected', files);
})
```

```html
<Dropzone
  :extensions="['.jpg', '.jpeg', '.png']"
  :maxSizeBytes="1024 * 1024 * 2"
  :multiple="false"
  v-model="files"
/>
```
