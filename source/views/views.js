enyo.kind({
	name: 'myapp.MainView',
	kind: 'FittableRows',
	fit: true,
	components:[
		{kind: 'onyx.Toolbar', content: 'WW2 Universal Solo Dice Chart Simulator'},
      {kind: 'Panels', fit: 'true', components: [
         {name: 'My panel', components: [
            {kind: 'onyx.Toolbar', components: [
               {content: 'Sector'},
               {kind: 'onyx.PickerDecorator', components: [
                  {},
                  {kind: 'onyx.IntegerPicker', name: 'sector', min: 1, max: 12, value: 1 }
               ]},
               {content: 'Distance'},
               {kind: 'onyx.PickerDecorator', components: [
                  {},
                  {kind: 'onyx.Picker', name: 'distance', components: [
                     {content: 'Moving Away', active: true},
                     {content: 'Closing'},
                     {content: 'Close'}
                  ]}
               ]},
               {kind: 'onyx.Button', content: 'Engage', classes: 'onyx-affirmative', ontap: 'generateCard' },
               {kind: 'enyo.Image', name: 'Order', fit: true, attributes:{ height:'70', width:'70' }},
               {kind: 'enyo.Image', name: 'Speed', fit: true, attributes:{ height:'70', width:'70' }}
            ]},
         {content: 'Concept and Layout by: Joaquim [Blackronin]'},
         {content: 'Original Typography by: Mike [OldGuy59]'},
         {content: 'Web App by: John [RiotInferno]'},
         {content: 'Please direct feedback to RiotInferno at the wingsofwar.org forum'}
      ]},
	]}],
   getRandomItem: function( data, item )
   {
      var itemLength = data.get(item).length;
      var selectedItem = Math.floor(Math.random() * itemLength); 
      return 'assets/images/' + item + '/' + data.get(item)[selectedItem] + '.png';
   },
   generateCard: function(inSender, inEvent)
   {
      sector = this.$.sector.get('value');
      sector = sector - 1;
      distance = this.$.distance.get('selected').content;
      var distEnum = 0;
      if( distance == 'Moving Away' )
         distEnum = 0;
      else if( distance == 'Closing' )
         distEnum = 1;
      else if( distance == 'Close' )
         distEnum = 2;
      var data = ww2Chart.at( sector ).get('section').at( distEnum );
      
      var moveImage;
      if( data.get('special') == true )
      {
         var chance = data.get('specialChance');
         if( (Math.floor(Math.random() * chance ) + 1) == chance )
         {
            moveImage = 'assets/images/moves/' + data.get('specialMove') + '.png';
         }
         else
         {
            moveImage = this.getRandomItem( data, 'moves' );
         }
      }
      else
      {
         moveImage = this.getRandomItem( data, 'moves' );
      }
      var speedImage = this.getRandomItem( data, 'speed' );

      this.$.Order.setAttribute( 'src', moveImage ); 
      this.$.Speed.setAttribute( 'src', speedImage ); 
   }
});
