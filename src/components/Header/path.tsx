export default function getPath(props : string) {
  let path : string = props;
  if(path.at(-1) === "/")
    path = path.slice(0, -1);

  path = path.slice(1, path.length);

  path = path.replaceAll('/', ' 〉');
  return path;
}
