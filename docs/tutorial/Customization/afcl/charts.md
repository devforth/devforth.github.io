# Charts

> Charts of the AdminForth Components Library (AFCL) with live examples: Bar Chart, Area Chart, Pie Chart, Treemap Chart, Mixed Chart.

import AfclPreview from '@site/src/components/AfclPreview';



Charts drawn with ApexCharts. Import the components from `@/afcl`, see [AdminForth Components Library](./index.md).

## Bar Chart

Under the hood AdminForth uses MIT-licensed [ApexCharts](https://apexcharts.com/). It has very rich variety of options, you can pass
any of native settings to `options` prop. Here we will only show some basics.

`color` of a series is optional: series without it take the chart palette colors in order, so several bar charts on one page stay consistent.

```js
import { BarChart } from '@/afcl'
```

```html
<BarChart
  :data="[
    { count: 1, x: '02 Jun 2025'}, 
    { count: 5, x: '03 Jun 2025'}, 
    { count: 3, x: '04 Jun 2025'}, 
    { count: 4, x: '05 Jun 2025'}, 
    { count: 2, x: '06 Jun 2025'}, 
  ]"
  :series="[{
    name: $t('Added apartments'),
    fieldName: 'count',
    color: '#4E79A7',
  }]"
  :options="{
    chart: {
      height: 250,
    },
  }"
/>
```

### Y-axis labels

```js
import { BarChart } from '@/afcl'
```

```html
<BarChart
  :data="[
    { count: 1, x: '02 Jun 2025'}, 
    { count: 5, x: '03 Jun 2025'}, 
    { count: 3, x: '04 Jun 2025'}, 
    { count: 4, x: '05 Jun 2025'}, 
    { count: 2, x: '06 Jun 2025'}, 
  ]"
  :series="[{
    name: $t('Added apartments'),
    fieldName: 'count',
    color: '#4E79A7',
  }]"
  :options="{
    chart: {
      height: 250,
    },
//diff-add
    yaxis: {
//diff-add
      stepSize: 1, // needed if your data is integer
//diff-add
      labels: {
//diff-add
        show: true,
//diff-add
        style: {
//diff-add
          fontFamily: 'Inter, sans-serif',
//diff-add
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
//diff-add
        }
//diff-add
      }
//diff-add
    }
  }"
/>
```

### X-axis labels and formatting labels

```ts
import { BarChart } from '@/afcl'
import dayjs from 'dayjs'
```

```html
<BarChart
  :data="[
    { count: 1, x: '02 Jun 2025'}, 
    { count: 5, x: '03 Jun 2025'}, 
    { count: 3, x: '04 Jun 2025'}, 
    { count: 4, x: '05 Jun 2025'}, 
    { count: 2, x: '06 Jun 2025'}, 
  ]"
  :series="[{
    name: $t('Added apartments'),
    fieldName: 'count',
    color: '#4E79A7',
  }]"
  :options="{
    chart: {
      height: 250,
    },
//diff-add
    xaxis: {
//diff-add
      labels: {
//diff-add
        show: true,
//diff-add
        formatter: function (value) {
//diff-add
          return dayjs(value).format('DD MMM');
//diff-add
        },
//diff-add
        style: {
//diff-add
          fontFamily: 'Inter, sans-serif',
//diff-add
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
//diff-add
        }
//diff-add
      }
//diff-add
    }
  }"
/>
```

### Grid

```js
import { BarChart } from '@/afcl'
```

```html
<BarChart
  :data="[
    { count: 1, x: '02 Jun 2025'}, 
    { count: 5, x: '03 Jun 2025'}, 
    { count: 3, x: '04 Jun 2025'}, 
    { count: 4, x: '05 Jun 2025'}, 
    { count: 2, x: '06 Jun 2025'}, 
  ]"
  :series="[{
    name: $t('Added apartments'),
    fieldName: 'count',
    color: '#4E79A7',
  }]"
  :options="{
    chart: {
      height: 250,
    },
//diff-add
    grid: {
//diff-add
      show: true,
//diff-add
      borderColor: 'rgba(0, 0, 0, 0.1)',
//diff-add
      strokeDashArray: 4, 
//diff-add
      position: 'back',
//diff-add
      xaxis: {
//diff-add
        lines: {
//diff-add
          show: true
//diff-add
        }
//diff-add
      },
//diff-add
      yaxis: {  
//diff-add
        lines: {
//diff-add
          show: true
//diff-add
        }
//diff-add
      }
//diff-add
    }
  }"
/>
```

### Data labels

```js
import { BarChart } from '@/afcl'
```

```html
<BarChart
  :data="[
    { count: 1, x: '02 Jun 2025'}, 
    { count: 5, x: '03 Jun 2025'}, 
    { count: 3, x: '04 Jun 2025'}, 
    { count: 4, x: '05 Jun 2025'}, 
    { count: 2, x: '06 Jun 2025'}, 
  ]"
  :series="[{
    name: $t('Added apartments'),
    fieldName: 'count',
    color: '#4E79A7',
  }]"
  :options="{
    chart: {
      height: 250,
    },
//diff-add
    dataLabels: {
//diff-add
      formatter: function (value) {
//diff-add
        return `⬆️ ${value}`;
//diff-add
      },
//diff-add
      enabled: true,
//diff-add
      style: {
//diff-add
        fontSize: '12px',
//diff-add
        fontFamily: 'Inter, sans-serif',
//diff-add
      }
//diff-add
    }
  }"
/>
```

### Stacked bars and legend

```js
import { BarChart } from '@/afcl'
```

```html
<BarChart
  :data="[
    { countCars: 2, countBikes: 3, x: '02 Jun 2025'}, 
    { countCars: 5, countBikes: 1, x: '03 Jun 2025'}, 
    { countCars: 3, countBikes: 4, x: '04 Jun 2025'}, 
    { countCars: 4, countBikes: 2, x: '05 Jun 2025'}, 
    { countCars: 2, countBikes: 3, x: '06 Jun 2025'},
  ]"
  :series="[
    {
      name: $t('Cars'),
      fieldName: 'countCars',
      color: '#4E79A7',
    },
    {
      name: $t('Bikes'),
      fieldName: 'countBikes',
      color: '#F28E2B',
    }
  ]"
  :options="{
    chart: {
      height: 250,
//diff-add
      stacked: true,
    },
//diff-add
    legend: {
//diff-add
      show: true,
//diff-add
    },
  }"
/>
```

### Horizontal bars

```js
import { BarChart } from '@/afcl'
```

```html
<BarChart
  :data="[
    { countCars: 2, countBikes: 3, x: '02 Jun 2025'}, 
    { countCars: 5, countBikes: 1, x: '03 Jun 2025'}, 
    { countCars: 3, countBikes: 4, x: '04 Jun 2025'}, 
    { countCars: 4, countBikes: 2, x: '05 Jun 2025'}, 
    { countCars: 2, countBikes: 3, x: '06 Jun 2025'},
  ]"
  :series="[
    {
      name: $t('Cars'),
      fieldName: 'countCars',
      color: '#4E79A7',
    },
    {
      name: $t('Bikes'),
      fieldName: 'countBikes',
      color: '#F28E2B',
    }
  ]"
  :options="{
    chart: {
      height: 250,
      type: 'bar',
    },
//diff-add
    plotOptions: {
//diff-add
      bar: {
//diff-add
        horizontal: true,
//diff-add
      }
//diff-add
    },
    legend: {
      show: true,
    },
  }"
/>
```

## Area Chart

```js
import { AreaChart } from '@/afcl'
```

```html
<AreaChart
  :data="[
    { count: 1, x: '02 Jun 2025'}, 
    { count: 5, x: '03 Jun 2025'}, 
    { count: 3, x: '04 Jun 2025'}, 
    { count: 4, x: '05 Jun 2025'}, 
    { count: 2, x: '06 Jun 2025'}, 
  ]"
  :series="[{
    name: $t('Added apartments'),
    fieldName: 'count',
    color: '#4E79A7',
  }]"
  :options="{
    chart: {
      height: 250,
    },
  }"
/>
```

### Multiple lines

```js
import { AreaChart } from '@/afcl'
```

```html
<AreaChart
  :data="[
    { countCars: 2, countBikes: 3, x: '02 Jun 2025'}, 
    { countCars: 5, countBikes: 1, x: '03 Jun 2025'}, 
    { countCars: 3, countBikes: 4, x: '04 Jun 2025'}, 
    { countCars: 4, countBikes: 2, x: '05 Jun 2025'}, 
    { countCars: 2, countBikes: 3, x: '06 Jun 2025'},
  ]"
  :series="[
    {
      name: $t('Cars'),
      fieldName: 'countCars',
      color: '#4E79A7',
    },
    {
      name: $t('Bikes'),
      fieldName: 'countBikes',
      color: '#F28E2B',
    }
  ]"
  :options="{
    chart: {
      height: 250,
    },
  }"
/>
```

### Stacked area

```js
import { AreaChart } from '@/afcl'
```

```html
<AreaChart
  :data="[
    { countCars: 2, countBikes: 3, x: '02 Jun 2025'}, 
    { countCars: 5, countBikes: 1, x: '03 Jun 2025'}, 
    { countCars: 3, countBikes: 4, x: '04 Jun 2025'}, 
    { countCars: 4, countBikes: 2, x: '05 Jun 2025'}, 
    { countCars: 2, countBikes: 3, x: '06 Jun 2025'},
  ]"
  :series="[
    {
      name: $t('Cars'),
      fieldName: 'countCars',
      color: '#4E79A7',
    },
    {
      name: $t('Bikes'),
      fieldName: 'countBikes',
      color: '#F28E2B',
    }
  ]"
  :options="{
    chart: {
      height: 250,
//diff-add
      stacked: true,
    },
  }"
/>
```

### Data labels

```js
import { AreaChart } from '@/afcl'
```

```html
<AreaChart
  :data="[
    { count: 2, x: '02 Jun 2025'}, 
    { count: 5, x: '03 Jun 2025'}, 
    { count: 3, x: '04 Jun 2025'}, 
    { count: 4, x: '05 Jun 2025'}, 
    { count: 2, x: '06 Jun 2025'},
  ]"
  :series="[
    {
      name: $t('Cars'),
      fieldName: 'count',
      color: '#4E79A7',
    },
  ]"
  :options="{
    chart: {
      height: 250,
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif',
      }
    },
    grid: {
      padding: {
        left: 10, // to fit the labels
        right: 10,
      },
    },
  }"
/>
```

### Grid, x-axis and y-axis labels

See [Bar Chart](#bar-chart) for details, the config is the same.

## Pie Chart

### Basic

```js
import { PieChart } from '@/afcl'
```

```html
<PieChart
  :data="[
    { amount: 5, label: 'Cars'},
    { amount: 3, label: 'Bikes'},
    { amount: 2, label: 'Trucks'},
    { amount: 1, label: 'Boats'},
  ]"
  :options="{
    chart: {
      height: 250,
    },
  }"
/>
```

### Pie with data labels

```js
import { PieChart } from '@/afcl'
```

```html
<PieChart
  :data="[
    { amount: 5, label: 'Cars'},
    { amount: 3, label: 'Bikes'},
    { amount: 2, label: 'Trucks'},
    { amount: 1, label: 'Boats'},
  ]"
  :options="{
    chart: {
      height: 250,
    },
//diff-add
    dataLabels: {
//diff-add
      enabled: true,
//diff-add
    },
//diff-add
    plotOptions: {
//diff-add
      pie: {
//diff-add
        dataLabels: {
//diff-add
          offset: -10, // Moves labels closer to or further from the slices
//diff-add
          minAngleToShowLabel: 10, // Ensures that small slices don't show labels
//diff-add
        },
//diff-add
        expandOnClick: true,
//diff-add
      },
//diff-add
    },
  }"
/>
```

### Donut Chart

```js
import { PieChart } from '@/afcl'
```

```html
<PieChart
  :data="[
    { amount: 5, label: 'Cars'},
    { amount: 3, label: 'Bikes'},
    { amount: 2, label: 'Trucks'},
    { amount: 1, label: 'Boats'},
  ]"
  :options="{
    chart: {
      height: 250,
//diff-add
      type: 'donut',
    },
  }"
/>
```

### Fill donut with total info

```js
import { PieChart } from '@/afcl'
```

```html
<PieChart
  :data="[
    { amount: 5, label: 'Cars'},
    { amount: 3, label: 'Bikes'},
    { amount: 2, label: 'Trucks'},
    { amount: 1, label: 'Boats'},
  ]"
  :options="{
    chart: {
      height: 250,
      type: 'donut',
    },
//diff-add
    plotOptions: {
//diff-add
      pie: {
//diff-add
        donut: {
//diff-add
          labels: {
//diff-add
            total: {
//diff-add
              show: true,
//diff-add
              label: $t('Total wheels'),
//diff-add
              formatter: () => `11`,
//diff-add
            },
//diff-add
          },
//diff-add
        },
//diff-add
      },
//diff-add
    },
  }"
/>
```

### Radial bar chart

```js
import { PieChart } from '@/afcl'
```

```html
<PieChart
  :data="[
    { amount: 80, label: 'Cars'},
    { amount: 50, label: 'Bikes'},
    { amount: 30, label: 'Trucks'},
    { amount: 70, label: 'Boats'},
  ]"
  :options="{
    chart: {
//diff-add
      height: '300px',
//diff-add
      width: '100%',
//diff-add
      type: 'radialBar',
//diff-add
      sparkline: {
//diff-add
        enabled: true,
//diff-add
      },
    },
//diff-add
    plotOptions: {
//diff-add
      radialBar: {
//diff-add
        track: {
//diff-add
          background: '#E5E7EB',
//diff-add
        },
//diff-add
        dataLabels: {
//diff-add
          name: {
//diff-add
            offsetY: -10
//diff-add
          },
//diff-add
          value: {
//diff-add
            offsetY: 2,
//diff-add
          }
//diff-add
        },
//diff-add
        hollow: {
//diff-add
          margin: 0,
//diff-add
          size: '32%',
//diff-add
        }
//diff-add
      },
//diff-add
    },
//diff-add
    legend: {
//diff-add
      show: true,
//diff-add
      position: 'bottom',
//diff-add
    },
  }"
/>
```

## Treemap Chart

This example is based on the ApexCharts treemap demo “color range”.

```ts
import { TreeMapChart } from '@/afcl'

const deltaToColor = (delta: number) => {
  if (delta < -10) return '#B91C1C' // bright red
  if (delta < 0) return '#EF4444'   // red
  if (delta <= 10) return '#22C55E' // green
  return '#15803D'                 // very green
}

const formatDelta = (delta: number) => (delta > 0 ? `+${delta}%` : `${delta}%`)

const data = [
  { x: 'New Delhi', value: 218, delta: 12 },
  { x: 'Kolkata', value: 149, delta: -4 },
  { x: 'Mumbai', value: 184, delta: -14 },
  { x: 'Ahmedabad', value: 55, delta: 6 },
  { x: 'Bangalore', value: 84, delta: 9 },
  { x: 'Pune', value: 31, delta: -2 },
  { x: 'Chennai', value: 70, delta: 0 }
]

// Optional: precompute per-point color using delta
const dataWithColors = data.map((item) => ({
  ...item,
  fillColor: deltaToColor(item.delta),
}))

const series = [
  { name: 'Desktops', fieldName: 'value' },
]
```

```html
<TreeMapChart
  :data="dataWithColors"
  :series="series"
  :options="{
    chart: { height: 350 },
    dataLabels: {
      formatter: (text, { seriesIndex, dataPointIndex, w }) => {
        const point = w?.config?.series?.[seriesIndex]?.data?.[dataPointIndex]
        if (!point) return text
        return `${text} ${formatDelta(point.delta)}`
      },
    },
    plotOptions: {
      treemap: {
        distributed: false,
        enableShades: false,
      },
    },
    tooltip: {
      y: {
        formatter: (value, { seriesIndex, dataPointIndex, w }) => {
          const point = w?.config?.series?.[seriesIndex]?.data?.[dataPointIndex]
          if (!point) return value
          return `${point.value} (${formatDelta(point.delta)})`
        },
      },
    },
  }"
/>
```

## Mixed Chart

### Basic

```js
import { MixedChart } from '@/afcl'
```

```html
<MixedChart
  :data="[
    { x: '02 Jun 2025', avgPrice: 100, listedPrice: 100, unlistedPrice: 100},
    { x: '03 Jun 2025', avgPrice: 280, listedPrice: 130, unlistedPrice: 200},
    { x: '04 Jun 2025', avgPrice: 150, listedPrice: 90, unlistedPrice: 60},
    { x: '05 Jun 2025', avgPrice: 100, listedPrice: 100, unlistedPrice: 100},
    { x: '06 Jun 2025', avgPrice: 200, listedPrice: 290, unlistedPrice: 180},
    { x: '07 Jun 2025', avgPrice: 100, listedPrice: 100, unlistedPrice: 100},
  ]"
  :series="[
    { name: $t('Avg Price'), fieldName: 'avgPrice', type: 'line', color: '#4E79A7' },
    { name: $t('Listed Price'), fieldName: 'listedPrice', type: 'column', color: '#F28E2B' },
    { name: $t('Unlisted Price'), fieldName: 'unlistedPrice', type: 'area', color: '#59A14F' },
  ]"
  :options="{
    chart: {
      height: 350,
    },
    stroke: {
      width: [6, 0, 6],  // Line: 6px, Column: 0px (no border), Area: 6px
    },
    fill: {
      opacity: [1, 0.85, 0.25], // Line: 1, Column: 0.85, Area: 0.25
    },
  }"
/>
```
