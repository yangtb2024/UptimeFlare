const pageConfig = {
  title: "yangtb2024's Status Page",
  links: [
    { link: 'https://github.com/yangtb2024', label: 'GitHub' },
    { link: 'http://blog.yangtb2024.me/', label: 'Blog' },
    { link: 'yangtb2024@gmail.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      id: 'Blog',
      name: 'Blog',
      method: 'GET',
      target: 'http://blog.yangtb2024.me/'
    },
    {
      id: 'API',
      name: 'NEW_API',
      method: 'GET',
      target: 'http://new.yangtb2024.me/'
    },  
    {
      id: 'my_api',
      name: 'my_api',
      method: 'GET',
      target: 'https://my.yangtb2024.me/'
    },    
    {
      id: '原题机',
      name: '原题机',
      method: 'GET',
      target: 'http://yuantiji.ac/zh/'
    }, 
  ],
  notification: {
    appriseApiServer: "https://apprise.example.com/notify",
    recipientUrl: "tgram://a/a",
    timeZone: "Asia/Shanghai",
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
