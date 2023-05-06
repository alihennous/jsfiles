

$.ajax({
    type : 'GET',
    url : 'https://www.googleapis.com/blogger/v3/blogs/6536991856935849040/posts?key=AIzaSyA1ZE235UE1vNeo0BCNrgK4eBsoA4Na0Js&amp;maxResults=1',
    success(res){
      $('#posts').append('<a class="shadow hover:shadow-lg mb-3 flex-col" href="data:post.url"> <div class="relative pt-[70%] w-full"> <img class="w-full h-full absolute top-0" src="jjtyjtj" alt=""/> <p class=" text-xs absolute top-2 right-2 px-2 py-2 text-[10px] text-white bg-zinc-400/80 dark:text-zinc-100 dark:bg-zinc-700/60"><data:post.timestamp/></p> </div> <div class="px-2 pt-2 pb-4"> <h1 class="leading-[22px] text-[14px]"><data:post.title/></h1> </div> </a>');
    }

  });



  alert('ffffffffffffffffffffffefef');
