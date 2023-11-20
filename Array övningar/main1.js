/*------------- array ----------------*/
// 1- Initial setup: Skapa en array med magiska element, till exempel ["trollstav", "alv", "drake", "kristallkula", "fenixfjäder"].

const magicElements = ["trollstav", "alv", "drake", "kristallkula", "fenixfjäder"];

// 2 - Första Uppdraget: Använd splice för att lägga till minst två nya element någonstans i mitten av arrayen och ta bort minst ett element.

magicElements.splice(2, 0 ,'alice', 'monster');
console.log(magicElements);

// 3- Andra Uppdraget: Använd sedan slice för att skapa en ny array med endast de tre första elementen i den modifierade arrayen.

const addaa = magicElements.slice["trollstav", "alv", "drake"];
console.log(addaa);
