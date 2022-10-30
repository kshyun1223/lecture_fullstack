function useContext(Context) {
  var dispatcher = resolveDispatcher();
  if (Context._context !== undefined) {
    var realContext = Context._context;
    // Don't deduplicate because this legitimately causes bugs
    // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        error(
          'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be '
          + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
        error(
          'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' 
          + 'removed in a future major release. Did you mean to call useContext(Context) instead?');      
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
  }
  return dispatcher.useContext(Context);
}