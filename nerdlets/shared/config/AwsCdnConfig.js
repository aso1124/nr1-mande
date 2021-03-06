export default {
    title: 'Deliver - CDN',
    eventTypes: [
      {
        event: 'LoadBalancerSample',
        attributes: [
          ['awsAccountId', 'AWS'],
          ['awsRegion', 'AWS'],
          ['provider.domainName', 'AWS'],
          ['provider.enabled', 'AWS'],
          ['provider.status', 'AWS'],
          ['label.Name', 'Tags'],
        ],
      },
    ],
    overviewConfig: [
      {
        nrql: `SELECT average(provider.error5xxErrorRate.Average) as 'Count' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
        columnStart: 1,
        columnEnd: 3,
        chartSize: 'small',
        chartType: 'billboard',
        title: '5xx Errors',
        useSince: true,
      },
      {
        nrql: `SELECT average(provider.error5xxErrorRate.Average) as 'Count' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
        noFacet: true,
        columnStart: 4,
        columnEnd: 12,
        chartSize: 'small',
        chartType: 'line',
        title: '5xx Errors',
        useSince: true,
      },
      {
        nrql: `SELECT average(provider.error4xxErrorRate.Average) as 'Count' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
        columnStart: 1,
        columnEnd: 3,
        chartSize: 'small',
        chartType: 'billboard',
        title: '4xx Errors',
        useSince: true,
      },
      {
        nrql: `SELECT average(provider.error4xxErrorRate.Average) as 'Count' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
        columnStart: 4,
        columnEnd: 12,
        chartSize: 'small',
        chartType: 'line',
        title: '4xx Errors',
        useSince: true,
      },
      {
        nrql: `SELECT rate(sum(provider.requests.Sum), 5 minute) as 'req/min' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
        columnStart: 1,
        columnEnd: 3,
        chartSize: 'small',
        chartType: 'billboard',
        title: 'Requests per Minute',
        useSince: true,
      },
      {
        nrql: `SELECT rate(sum(provider.requests.Sum), 5 minute) as 'req/min' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
        columnStart: 4,
        columnEnd: 12,
        chartSize: 'small',
        chartType: 'line',
        title: 'Requests per Minute',
        useSince: true,
      },
      {
        nrql: `SELECT sum(provider.requests.Sum) as 'requests' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
        columnStart: 1,
        columnEnd: 3,
        chartSize: 'small',
        chartType: 'billboard',
        title: 'All Requests',
        useSince: true,
      },
      {
        nrql: `SELECT sum(provider.requests.Sum) as 'requests' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
        columnStart: 4,
        columnEnd: 12,
        chartSize: 'small',
        chartType: 'line',
        title: 'All Requests',
        useSince: true,
      },
      {
        nrql: `SELECT sum(provider.bytesDownloaded.Sum/1000000) as 'MB' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
        columnStart: 1,
        columnEnd: 3,
        chartSize: 'small',
        chartType: 'billboard',
        title: 'Downloaded Bytes',
        useSince: true,
      },
      {
        nrql: `SELECT sum(provider.bytesDownloaded.Sum/1000000) as 'MB' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
        columnStart: 4,
        columnEnd: 12,
        chartSize: 'small',
        chartType: 'line',
        title: 'Downloaded Bytes',
        useSince: true,
      },
    ],
    metrics: [
      {
        title: '5xx Errors (Count)',
        threshold: {
          critical: 5,
          warning: 3,
        },
        query: {
          nrql: `SELECT average(provider.error5xxErrorRate.Average) as 'result' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
          lookup: 'result',
        },
        detailConfig: [
          {
            nrql: `SELECT average(provider.error5xxErrorRate.Average) as 'Count' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
            columnStart: 1,
            columnEnd: 3,
            chartSize: 'medium',
            chartType: 'billboard',
            title: '5xx Errors',
            useSince: true,
          },
          {
            nrql: `SELECT average(provider.error5xxErrorRate.Average) as 'Count' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
            noFacet: true,
            columnStart: 4,
            columnEnd: 12,
            chartSize: 'medium',
            chartType: 'line',
            title: '5xx Errors',
            useSince: true,
          },
        ],
      },
      {
        title: '4xx Errors (Count)',
        threshold: {
          critical: 10,
          warning: 5,
        },
        query: {
          nrql: `SELECT average(provider.error4xxErrorRate.Average) as 'result' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
          lookup: 'result',
        },
        detailConfig: [
          {
            nrql: `SELECT average(provider.error4xxErrorRate.Average) as 'Count' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
            columnStart: 1,
            columnEnd: 3,
            chartSize: 'medium',
            chartType: 'billboard',
            title: '4xx Errors',
            useSince: true,
          },
          {
            nrql: `SELECT average(provider.error4xxErrorRate.Average) as 'Count' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
            columnStart: 4,
            columnEnd: 12,
            chartSize: 'medium',
            chartType: 'line',
            title: '4xx Errors',
            useSince: true,
          },
        ],
      },
      {
        title: 'Requests per Minute (Rate)',
        threshold: {
          critical: 1,
          warning: .05,
        },
        query: {
          nrql: `SELECT rate(sum(provider.requests.Sum), 5 minute) as 'result' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
          lookup: 'result',
        },
        detailConfig: [
          {
            nrql: `SELECT rate(sum(provider.requests.Sum), 5 minute) as 'req/min' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
            columnStart: 1,
            columnEnd: 3,
            chartSize: 'medium',
            chartType: 'billboard',
            title: 'Requests per Minute',
            useSince: true,
          },
          {
            nrql: `SELECT rate(sum(provider.requests.Sum), 5 minute) as 'req/min' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
            columnStart: 4,
            columnEnd: 12,
            chartSize: 'medium',
            chartType: 'line',
            title: 'Requests per Minute',
            useSince: true,
          },
        ],
      },
      {
        title: 'All Requests',
        threshold: {
          critical: 1000,
          warning: 1250,
          type: 'below',
        },
        invertCompareTo: 'true',
        query: {
          nrql: `SELECT sum(provider.requests.Sum) as 'result' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
          lookup: 'result',
        },
        detailConfig: [
          {
            nrql: `SELECT sum(provider.requests.Sum) as 'requests' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
            columnStart: 1,
            columnEnd: 3,
            chartSize: 'medium',
            chartType: 'billboard',
            title: 'All Requests',
            useSince: true,
          },
          {
            nrql: `SELECT sum(provider.requests.Sum) as 'requests' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
            columnStart: 4,
            columnEnd: 12,
            chartSize: 'medium',
            chartType: 'line',
            title: 'All Requests',
            useSince: true,
          },
        ],
      },
      {
        title: 'Downloaded Bytes (MB)',
        threshold: {
          critical: 275,
          warning: 300,
          type: 'below',
        },
        invertCompareTo: 'true',
        query: {
          nrql: `SELECT sum(provider.bytesDownloaded.Sum/1000000) as 'result' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
          lookup: 'result',
        },
        detailConfig: [
          {
            nrql: `SELECT sum(provider.bytesDownloaded.Sum/1000000) as 'MB' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
            columnStart: 1,
            columnEnd: 3,
            chartSize: 'medium',
            chartType: 'billboard',
            title: 'Downloaded Bytes',
            useSince: true,
          },
          {
            nrql: `SELECT sum(provider.bytesDownloaded.Sum/1000000) as 'MB' FROM LoadBalancerSample WHERE providerAccountId = '36376' and provider = 'CloudFrontDistribution'`,
            columnStart: 4,
            columnEnd: 12,
            chartSize: 'medium',
            chartType: 'line',
            title: 'Downloaded Bytes',
            useSince: true,
          },
        ],
      },
    ],
  }
  