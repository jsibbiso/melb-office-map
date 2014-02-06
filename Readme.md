# Renders the Melbourne Office
####  in a friendly DOM (Not to scale)

Rooms and Plants are accessible via DOM ids so you can easily attach events to them or change their colour based on values from an external (Ie. Real world) source.

## Dependencies
* Rapheal ~ 2.1.2 http://raphaeljs.com/

## Use
    MelbOfficeMap.render(targetDOMId,width,height);

    MelbOfficeMap.render("layout",600,300);

Update the colours of rooms using (if you are running JQuery):

    $("#boardRoom").attr("fill","#ccc");

## Possible Ideas
* Display which rooms are occupied based on motion sensors in rooms
* Click on a room to bring up the calendar for that room to book it
* Highlight plants that need water (based on humidity? Time since last water?)