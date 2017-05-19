export var customize = (metadata : Megazord.ContainerScreenList) : void => {
  //Default customization of metadata (does nothing).
  metadata['dashboard.dashboard']['params']['modalAnimation'] = 'scale-out';

  //templates
    //transparent
    metadata['dashboard.dashboard']['template'] = 'dashboard.html';
    metadata['dashboard.login']['template'] = 'login.html';
    metadata['appMenu.p2pAffiliate']['template'] = 'p2p-affiliate.html';
    metadata['appMenu.p2pTransfer']['template'] = 'p2p-transfer.html';
    metadata['appMenu.p2pCollection']['template'] = 'p2p-collection.html';


  //customize.json
  
}

//End of custom.ts
