# Youthube

- debouncing:

  typing :200ms
  typing :50ms

- - Performance:

    iphone pro max: 14 letters\* 1000 users= 140000 API calls
    with debouncing: 3 API calls \* 100 users= 3000 API calls

- - Debouncing with 200ms

    if the difference between two key strokes is less than 200ms - decline API call

    > 200ms - make an api call

cache:
time complexity in array = O(n)
time complexity of map =O(1)

[i, ip, iph, iphone]
90
{
i:
ip:
iph:
iphone:
}

new map()

- live chat>>infinite scroll>>pagination

- challenges of live chat

  - DataLayer - Get data live
  - UI layer Update the UI

- There are two ways to handle live data

  - 1. WebSocket - It is a two way connection established, kind of like a handshake between UI and server.
       The initial connection takes a little time, once that connection is established, we can quickly send and receive data from either side, so its a bi-directional communication.
       As soon as we open the application, a wesocket connection is established, we can send data immediately or whenever we want to.
       No regular time interval(data can come at any time).
       Example - stock trading app, as the data needs to be very real time coz stocks go up and down every second.
       whatsapp as the messaging app needs to deliver messages in real time.
  - 2. Long/API polling - UI requests the data and the data flows from server to UI after a interval of time
       Example - gmail, as it checks for new mailmessage every 10 seconds.
       crickbuzz it polls data every 25 seconds.
